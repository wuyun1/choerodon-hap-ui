import React, { Children, Component, createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from '../../_util/warning';
import Animate from '../../animate';
import toArray from '../util/Children/toArray';
import { contextTypes } from './Tree';
import Progress from '../../progress';
import { getNodeChildren, getPosition, isCheckDisabled, traverseTreeNodes } from './util';

const ICON_OPEN = 'open';
const ICON_CLOSE = 'close';

const LOAD_STATUS_NONE = 0;
const LOAD_STATUS_LOADING = 1;
const LOAD_STATUS_LOADED = 2;
const LOAD_STATUS_FAILED = 0; // Action align, let's make failed same as init.

const defaultTitle = '---';

let onlyTreeNodeWarned = false; // Only accept TreeNode

export const nodeContextTypes = {
  ...contextTypes,
  rcTreeNode: PropTypes.shape({
    onUpCheckConduct: PropTypes.func,
  }),
};

export default class TreeNode extends Component {
  static propTypes = {
    eventKey: PropTypes.string, // Pass by parent `cloneElement`
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    root: PropTypes.object,
    onSelect: PropTypes.func,
    wrapper: PropTypes.func,

    // By parent
    expanded: PropTypes.bool,
    selected: PropTypes.bool,
    checked: PropTypes.bool,
    halfChecked: PropTypes.bool,
    children: PropTypes.node,
    title: PropTypes.node,
    pos: PropTypes.string,
    dragOver: PropTypes.bool,
    dragOverGapTop: PropTypes.bool,
    dragOverGapBottom: PropTypes.bool,

    // By user
    isLeaf: PropTypes.bool,
    selectable: PropTypes.bool,
    disabled: PropTypes.bool,
    disableCheckbox: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  static contextTypes = nodeContextTypes;

  static childContextTypes = nodeContextTypes;

  static defaultProps = {
    title: defaultTitle,
  };

  static isTreeNode = 1;

  constructor(props) {
    super(props);

    this.state = {
      loadStatus: LOAD_STATUS_NONE,
      dragNodeHighlight: false,
    };
  }

  getChildContext() {
    return {
      ...this.context,
      rcTreeNode: {
        onUpCheckConduct: this.onUpCheckConduct,
      },
    };
  }

  // Isomorphic needn't load data in server side
  componentDidMount() {
    this.syncLoadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.syncLoadData(nextProps);
  }

  onUpCheckConduct = (treeNode, nodeChecked, nodeHalfChecked) => {
    const { pos: nodePos } = treeNode.props;
    const { eventKey, pos, checked, halfChecked } = this.props;
    const {
      rcTree: { checkStrictly, isKeyChecked, onBatchNodeCheck, onCheckConductFinished },
      rcTreeNode: { onUpCheckConduct } = {},
    } = this.context;

    // Stop conduct when current node is disabled
    if (isCheckDisabled(this)) {
      onCheckConductFinished();
      return;
    }

    const children = this.getNodeChildren();

    let checkedCount = nodeChecked ? 1 : 0;

    // Statistic checked count
    children.forEach((node, index) => {
      const childPos = getPosition(pos, index);

      if (nodePos === childPos || isCheckDisabled(node)) {
        return;
      }

      if (isKeyChecked(node.key || childPos)) {
        checkedCount += 1;
      }
    });

    // Static enabled children count
    const enabledChildrenCount = children
      .filter(node => !isCheckDisabled(node))
      .length;

    // checkStrictly will not conduct check status
    const nextChecked = checkStrictly ? checked : enabledChildrenCount === checkedCount;
    const nextHalfChecked = checkStrictly ? // propagated or child checked
      halfChecked : (nodeHalfChecked || (checkedCount > 0 && !nextChecked));

    // Add into batch update
    if (checked !== nextChecked || halfChecked !== nextHalfChecked) {
      onBatchNodeCheck(eventKey, nextChecked, nextHalfChecked);

      if (onUpCheckConduct) {
        onUpCheckConduct(this, nextChecked, nextHalfChecked);
      } else {
        // Flush all the update
        onCheckConductFinished();
      }
    } else {
      // Flush all the update
      onCheckConductFinished();
    }
  };

  onDownCheckConduct = (nodeChecked) => {
    const { children } = this.props;
    const { rcTree: { checkStrictly, isKeyChecked, onBatchNodeCheck } } = this.context;
    if (checkStrictly) return;

    traverseTreeNodes(children, ({ node, key }) => {
      if (isCheckDisabled(node)) return false;

      if (nodeChecked !== isKeyChecked(key)) {
        onBatchNodeCheck(key, nodeChecked, false);
      }
    });
  };

  onSelectorClick = (e) => {
    if (this.isSelectable()) {
      this.onSelect(e);
    } else {
      this.onCheck(e);
    }
  };

  onSelect = (e) => {
    if (this.isDisabled()) return;

    const { rcTree: { onNodeSelect } } = this.context;
    e.preventDefault();
    onNodeSelect(e, this);
  };

  onCheck = (e) => {
    if (this.isDisabled()) return;

    const { disableCheckbox, checked, eventKey } = this.props;
    const {
      rcTree: { checkable, onBatchNodeCheck, onCheckConductFinished },
      rcTreeNode: { onUpCheckConduct } = {},
    } = this.context;

    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    const targetChecked = !checked;
    onBatchNodeCheck(eventKey, targetChecked, false, this);

    // Children conduct
    this.onDownCheckConduct(targetChecked);

    // Parent conduct
    if (onUpCheckConduct) {
      onUpCheckConduct(this, targetChecked, false);
    } else {
      onCheckConductFinished();
    }
  };

  onMouseEnter = (e) => {
    const { rcTree: { onNodeMouseEnter } } = this.context;
    onNodeMouseEnter(e, this);
  };

  onMouseLeave = (e) => {
    const { rcTree: { onNodeMouseLeave } } = this.context;
    onNodeMouseLeave(e, this);
  };

  onContextMenu = (e) => {
    const { rcTree: { onNodeContextMenu } } = this.context;
    onNodeContextMenu(e, this);
  };

  onDragStart = (e) => {
    const { rcTree: { onNodeDragStart } } = this.context;

    e.stopPropagation();
    this.setState({
      dragNodeHighlight: true,
    });
    onNodeDragStart(e, this);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  onDragEnter = (e) => {
    const { rcTree: { onNodeDragEnter } } = this.context;

    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, this);
  };

  onDragOver = (e) => {
    const { rcTree: { onNodeDragOver } } = this.context;

    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, this);
  };

  onDragLeave = (e) => {
    const { rcTree: { onNodeDragLeave } } = this.context;

    e.stopPropagation();
    onNodeDragLeave(e, this);
  };

  onDragEnd = (e) => {
    const { rcTree: { onNodeDragEnd } } = this.context;

    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false,
    });
    onNodeDragEnd(e, this);
  };

  onDrop = (e) => {
    const { rcTree: { onNodeDrop } } = this.context;

    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragNodeHighlight: false,
    });
    onNodeDrop(e, this);
  };

  // Disabled item still can be switch
  onExpand = (e) => {
    const { rcTree: { onNodeExpand } } = this.context;
    const callbackPromise = onNodeExpand(e, this);

    // Promise like
    if (callbackPromise && callbackPromise.then) {
      this.setState({ loadStatus: LOAD_STATUS_LOADING });

      callbackPromise.then(() => {
        this.setState({ loadStatus: LOAD_STATUS_LOADED });
      }).catch(() => {
        this.setState({ loadStatus: LOAD_STATUS_FAILED });
      });
    }
  };

  // Drag usage
  setSelectHandle = (node) => {
    this.selectHandle = node;
  };

  getNodeChildren() {
    const { children } = this.props;
    const originList = toArray(children).filter(node => node);
    const targetList = getNodeChildren(originList);

    if (originList.length !== targetList.length && !onlyTreeNodeWarned) {
      onlyTreeNodeWarned = true;
      warning(false, 'Tree only accept TreeNode as children.');
    }

    return targetList;
  }

  getNodeState = () => {
    const { expanded } = this.props;

    if (this.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
  };

  isLeaf = () => {
    const { loadStatus } = this.state;
    const { isLeaf, hasChildren = this.getNodeChildren().length !== 0 } = this.props;
    const { rcTree: { loadData } } = this.context;

    return (
      isLeaf ||
      (!loadData && !hasChildren) ||
      (loadData && loadStatus === LOAD_STATUS_LOADED && !hasChildren)
    );
  };

  isDisabled = () => {
    const { disabled } = this.props;
    const { rcTree: { disabled: treeDisabled } } = this.context;

    // Follow the logic of Selectable
    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
  };

  isSelectable() {
    const { selectable } = this.props;
    const { rcTree: { selectable: treeSelectable } } = this.context;

    // Ignore when selectable is undefined or null
    if (typeof selectable === 'boolean') {
      return selectable;
    }

    return treeSelectable;
  }

  // Load data to avoid default expanded tree without data
  syncLoadData = (props) => {
    const { loadStatus } = this.state;
    const { expanded } = props;
    const { rcTree: { loadData } } = this.context;

    if (loadData && loadStatus === LOAD_STATUS_NONE && expanded && !this.isLeaf()) {
      this.setState({ loadStatus: LOAD_STATUS_LOADING });

      loadData(this).then(() => {
        this.setState({ loadStatus: LOAD_STATUS_LOADED });
      }).catch(() => {
        this.setState({ loadStatus: LOAD_STATUS_FAILED });
      });
    }
  };

  // Switcher
  renderSwitcher = () => {
    const {
      expanded,
      switcherIcon: switcherIconFromProps,
    } = this.props;
    const {
      rcTree: {
        prefixCls,
        switcherIcon: switcherIconFromCtx,
      },
    } = this.context;

    const switcherIcon = switcherIconFromProps || switcherIconFromCtx;

    if (this.isLeaf()) {
      return (
        <span className={classNames(`${prefixCls}-switcher`, `${prefixCls}-switcher-noop`)}>
          {typeof switcherIcon === 'function' ? switcherIcon({ ...this.props, isLeaf: true }) : switcherIcon}
        </span>
      );
    }

    const switcherCls = classNames(`${prefixCls}-switcher`, `${prefixCls}-switcher_${expanded ? ICON_OPEN : ICON_CLOSE}`);
    return (
      <span onClick={this.onExpand} className={switcherCls}>
        {typeof switcherIcon === 'function' ? switcherIcon({ ...this.props, isLeaf: false }) : switcherIcon}
      </span>
    );
  };

  // Checkbox
  renderCheckbox = () => {
    const { checked, halfChecked, disableCheckbox } = this.props;
    const { rcTree: { prefixCls, checkable } } = this.context;
    const disabled = this.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    const $custom = typeof checkable !== 'boolean' ? checkable : null;

    return (
      <span
        className={classNames(
          `${prefixCls}-checkbox`,
          checked && `${prefixCls}-checkbox-checked`,
          !checked && halfChecked && `${prefixCls}-checkbox-indeterminate`,
          (disabled || disableCheckbox) && `${prefixCls}-checkbox-disabled`,
        )}
        onClick={this.onCheck}
      >
        {$custom}
      </span>
    );
  };

  renderIcon = () => {
    const { loadStatus } = this.state;
    const { rcTree: { prefixCls } } = this.context;

    return loadStatus === LOAD_STATUS_LOADING ? (
      <Progress
        type="loading"
        size="small"
        width={14}
        className={`${prefixCls}-icon_loading`}
      />) : (
      <span
        className={classNames(
          `${prefixCls}-iconEle`,
          `${prefixCls}-icon__${this.getNodeState() || 'docu'}`,
        )}
      />
    );
  };

  // Icon + Title
  renderSelector = () => {
    const { loadStatus, dragNodeHighlight } = this.state;
    const { title, selected, icon } = this.props;
    const { rcTree: { prefixCls, showIcon, draggable, loadData } } = this.context;
    const disabled = this.isDisabled();

    const wrapClass = `${prefixCls}-node-content-wrapper`;

    // Icon - Still show loading icon when loading without showIcon
    let $icon;

    if (showIcon) {
      $icon = icon ? (
        <span
          className={classNames(
            `${prefixCls}-iconEle`,
            `${prefixCls}-icon__customize`,
          )}
        >
          {typeof icon === 'function' ? createElement(icon, this.props) : icon}
        </span>
      ) : this.renderIcon();
    } else if (loadData && loadStatus === LOAD_STATUS_LOADING) {
      $icon = this.renderIcon();
    }

    // Title
    const $title = <span className={`${prefixCls}-title`}>{title}</span>;

    return (
      <span
        ref={this.setSelectHandle}
        title={typeof title === 'string' ? title : ''}
        className={classNames(
          `${wrapClass}`,
          `${wrapClass}-${this.getNodeState() || 'normal'}`,
          (!disabled && (selected || dragNodeHighlight)) && `${prefixCls}-node-selected`,
          (!disabled && draggable) && 'draggable',
        )}
        draggable={(!disabled && draggable) || undefined}
        aria-grabbed={(!disabled && draggable) || undefined}

        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onContextMenu={this.onContextMenu}
        onClick={this.onSelectorClick}
        onDragStart={this.onDragStart}
      >
          {$icon}{$title}
        </span>
    );
  };

  // Children list wrapped with `Animation`
  renderChildren = () => {
    const { expanded, pos, wrapper } = this.props;
    const {
      rcTree: {
        prefixCls,
        openTransitionName, openAnimation,
        renderTreeNode,
      },
    } = this.context;

    // [Legacy] Animation control
    const renderFirst = this.renderFirst;
    this.renderFirst = 1;
    let transitionAppear = true;
    if (!renderFirst && expanded) {
      transitionAppear = false;
    }

    const animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = { ...openAnimation };
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }

    // Children TreeNode
    const nodeList = this.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    let $children;
    if (expanded) {
      let treeNodes = Children.map(nodeList, (node, index) => (
        renderTreeNode(node, index, pos)
      ));
      if (wrapper) {
        treeNodes = wrapper(treeNodes);
      }
      $children = (
        <ul hidden={!expanded}>
          {treeNodes}
        </ul>
      );
    }

    return (
      <Animate
        {...animProps}
        hiddenProp="hidden"
        transitionAppear={transitionAppear}
        component=""
      >
        {$children}
      </Animate>
    );
  };

  render() {
    const {
      className,
      dragOver, dragOverGapTop, dragOverGapBottom,
    } = this.props;
    const {
      rcTree: {
        prefixCls,
        filterTreeNode,
      },
    } = this.context;
    const disabled = this.isDisabled();

    return (
      <li
        className={classNames(className, {
          [`${prefixCls}-treenode-disabled`]: disabled,
          'drag-over': !disabled && dragOver,
          'drag-over-gap-top': !disabled && dragOverGapTop,
          'drag-over-gap-bottom': !disabled && dragOverGapBottom,
          'filter-node': filterTreeNode && filterTreeNode(this),
        })}

        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onDragEnd={this.onDragEnd}
      >
        {this.renderSwitcher()}
        {this.renderCheckbox()}
        {this.renderSelector()}
        {this.renderChildren()}
      </li>
    );
  }
}
