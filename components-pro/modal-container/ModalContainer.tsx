import React, { Component, Fragment } from 'react';
import { createPortal, render } from 'react-dom';
import classNames from 'classnames';
import findLast from 'lodash/findLast.js';
import noop from 'lodash/noop';
import measureScrollbar from 'choerodon-ui/lib/_util/measureScrollbar';
import { pxToRem } from 'choerodon-ui/lib/_util/UnitConvertor';
import warning from 'choerodon-ui/lib/_util/warning';
import { getProPrefixCls } from 'choerodon-ui/lib/configure';
import Modal, { ModalProps } from '../modal/Modal';
import Animate from '../animate';
import Mask from './Mask';
import { stopEvent } from '../_util/EventManager';

const { suffixCls } = Modal.defaultProps;

const KeyGen = function* (id) {
  while (true) {
    yield `${getProPrefixCls(suffixCls)}-${id++}`;
  }
}(1);

let root;
let containerInstanse;
let defaultBodyStyle: { overflow, paddingRight } | undefined;

function hideBodyScrollBar() {
  const { style } = document.body;
  if (!defaultBodyStyle) {
    defaultBodyStyle = {
      overflow: style.overflow,
      paddingRight: style.paddingRight,
    };
    style.overflow = 'hidden';
    style.paddingRight = pxToRem(measureScrollbar()) || null;
  }
}

function showBodyScrollBar() {
  const { style } = document.body;
  if (defaultBodyStyle) {
    const { overflow, paddingRight } = defaultBodyStyle;
    defaultBodyStyle = void 0;
    style.overflow = overflow;
    style.paddingRight = paddingRight;
  }
}

export interface ModalContainerState {
  modals: ModalProps[];
}

export default class ModalContainer extends Component<any> {
  static displayName = 'ModalContainer';

  state: ModalContainerState = {
    modals: [],
  };

  constructor(props, context) {
    super(props, context);
    containerInstanse = this;
  }

  handleAnimationEnd = (modalKey, isEnter) => {
    if (!isEnter) {
      const { modals } = this.state;
      const index = this.findIndex(modalKey);
      if (index !== -1) {
        const props = modals[index];
        modals.splice(index, 1);
        if (!props.destroyOnClose) {
          modals.unshift(props);
        }
        if (props.afterClose) {
          props.afterClose();
        }
        this.setState({ modals });
      }
    }
  };

  handleMaskClick = async () => {
    const modal = findLast(this.state.modals, ({ hidden }) => !hidden);
    if (modal) {
      const { close = noop, onCancel = noop, maskClosable } = modal;
      if (maskClosable) {
        const ret = await onCancel();
        if (ret !== false) {
          close();
        }
      }
    }
  };

  componentWillUpdate(nextProps) {
    const { location } = nextProps;
    const { location: currentLocation } = this.props;
    if (location && currentLocation && location.pathname !== currentLocation.pathname) {
      this.clear();
    }
  }

  componentWillUnmount() {
    containerInstanse = null;
  }

  findIndex(modalKey) {
    return this.state.modals.findIndex(({ key }) => key === modalKey);
  }

  open(props: ModalProps) {
    const { modals } = this.state;
    if (!props.key) {
      props.key = getKey();
      warning(!!props.destroyOnClose, `The modal which opened has no key, please provide a key or set the \`destroyOnClose\` as true.`);
    } else {
      const index = this.findIndex(props.key);
      if (index !== -1) {
        modals.splice(index, 1);
      }
    }
    modals.push({ ...props, hidden: false });
    this.setState({ modals });
  }

  close(props: ModalProps) {
    const { modals } = this.state;
    const target = modals.find(({ key }) => key === props.key);
    if (target) {
      Object.assign(target, props, { hidden: true });
      this.setState({ modals });
    }
  }

  clear() {
    this.state.modals.forEach(modal => this.close({ ...modal, destroyOnClose: true }));
  }

  getOffset(modals, idx) {
    const MARGIN_RIGHT_ARRAY: any = [];
    const DEFAULT = 150;
    const drawers = modals.filter(modal => modal.drawer && !modal.hidden);
    const indexInDrawers = drawers.findIndex(drawer => drawer.key === modals[idx].key);
    if (indexInDrawers === -1) {
      return 0;
    }
    for (let i = drawers.length - 1; i >= indexInDrawers; i--) {
      if (i === drawers.length - 1) {
        MARGIN_RIGHT_ARRAY.push(0);
      } else {
        const CURRENT_WIDTH = this.getModalWidth(drawers[i]);
        const NEXT_WIDTH = this.getModalWidth(drawers[i + 1]);
        const NEXT_MARGIN = MARGIN_RIGHT_ARRAY[drawers.length - i - 2];
        if (CURRENT_WIDTH >= NEXT_MARGIN + NEXT_WIDTH + DEFAULT) {
          MARGIN_RIGHT_ARRAY.push(0);
        } else {
          MARGIN_RIGHT_ARRAY.push(NEXT_MARGIN + NEXT_WIDTH + DEFAULT - CURRENT_WIDTH);
        }
      }
    }
    return MARGIN_RIGHT_ARRAY[MARGIN_RIGHT_ARRAY.length - 1];
  }

  getModalWidth(modal) {
    return (modal && modal.style && modal.style.width || 520);
  }

  getComponent() {
    let hidden = true;
    const { modals } = this.state;
    const items = modals.map((props, index) => {
      const thisHidden = props.hidden;
      if (hidden && !thisHidden) {
        hidden = false;
      }
      const newProps: any = {};
      if (props.drawer) {
        newProps.style = {
          marginRight: this.getOffset(modals, index),
          ...props.style,
        };
      }
      if (index === modals.length - 1) {
        newProps.className = classNames(props.className, `${getProPrefixCls(suffixCls)}-active`);
      }
      return (
        <Animate
          key={props.key}
          component="div"
          transitionAppear
          transitionName={props.drawer ? 'slide-right' : 'zoom'}
          hiddenProp="hidden"
          onEnd={this.handleAnimationEnd}
        >
          <Modal key={props.key} {...props} {...newProps} />
        </Animate>
      );
    });
    const animationProps: any = {};
    if (typeof window !== 'undefined') {
      if (hidden) {
        animationProps.onEnd = showBodyScrollBar;
      } else {
        hideBodyScrollBar();
      }
    }
    return (
      <Fragment>
        <Animate
          component=""
          transitionAppear
          transitionName="fade"
          hiddenProp="hidden"
          {...animationProps}
        >
          <Mask hidden={hidden} onClick={this.handleMaskClick} onMouseDown={stopEvent} />
        </Animate>
        {items}
      </Fragment>
    );
  };

  render() {
    const mount = getRoot();
    if (mount) {
      return createPortal(
        this.getComponent(),
        mount,
      );
    } else {
      return null;
    }
  }
}

function getRoot() {
  if (typeof window !== 'undefined') {
    const doc = window.document;
    if (root) {
      if (!root.parentNode) {
        doc.body.appendChild(root);
      }
    } else {
      root = doc.createElement('div');
      root.className = `${getProPrefixCls(suffixCls)}-container`;
      doc.body.appendChild(root);
    }
  }
  return root;
}

export function getContainer() {
  if (containerInstanse) {
    return containerInstanse;
  } else {
    render(<ModalContainer />, getRoot());
    return containerInstanse;
  }
}

export function open(props: ModalProps & { children }) {
  const container = getContainer();

  async function close(destroy?: boolean) {
    const { onClose = noop } = props;
    if (await onClose() !== false) {
      if (destroy) {
        container.close({ ...props, destroyOnClose: true });
      } else {
        container.close(props);
      }
    }
  }

  function show() {
    container.open(props);
  }

  props = {
    close,
    ...Modal.defaultProps,
    ...props,
  };
  container.open(props);

  return {
    close,
    open: show,
  };
}

export function getKey(): string {
  return KeyGen.next().value;
}
