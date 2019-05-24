import { cloneElement, Component, CSSProperties, isValidElement } from 'react';
import { findDOMNode } from 'react-dom';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import cssAnimate, { isCssAnimationSupported } from 'css-animation';
import animUtil from './util';

const transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave',
};

export interface AnimateChildProps {
  transitionName?: string | object;
  animation?: { [key: string]: (node: Element | Text, end: () => void) => void };
  style?: CSSProperties;
}

export default class AnimateChild extends Component<AnimateChildProps, any> {
  static displayName = 'AnimateChild';

  static propTypes = {
    children: PropTypes.any,
    transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    animation: PropTypes.any,
  };

  stopper;

  componentWillUnmount() {
    this.stop();
  }

  componentWillEnter(done: () => void) {
    if (animUtil.isEnterSupported(this.props)) {
      this.transition('enter', done);
    } else {
      done();
    }
  }

  componentWillAppear(done: () => void) {
    if (animUtil.isAppearSupported(this.props)) {
      this.transition('appear', done);
    } else {
      done();
    }
  }

  componentWillLeave(done: () => void) {
    if (animUtil.isLeaveSupported(this.props)) {
      this.transition('leave', done);
    } else {
      done();
    }
  }

  transition(animationType: string, finishCallback: () => void) {
    const node = findDOMNode(this);
    if (node) {
      const { props } = this;
      const { transitionName, animation = {} } = props;
      const nameIsObj = typeof transitionName === 'object';
      this.stop();
      const end = () => {
        this.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !animation[animationType])
        && transitionName && props[transitionMap[animationType]]) {
        const name = nameIsObj ? transitionName[animationType] : `${transitionName}-${animationType}`;
        let activeName = `${name}-active`;
        if (nameIsObj && transitionName[`${animationType}Active`]) {
          activeName = transitionName[`${animationType}Active`];
        }
        this.stopper = cssAnimate(node, {
          name,
          active: activeName,
        }, end);
      } else {
        this.stopper = animation[animationType](node, end);
      }
    }
  }

  stop() {
    const { stopper } = this;
    if (stopper) {
      this.stopper = null;
      stopper.stop();
    }
  }

  render() {
    const { children, ...otherProps } = this.props;
    if (isValidElement(children)) {
      const props = omit(otherProps,
        [
          'animation',
          'transitionName',
          'transitionEnter',
          'transitionAppear',
          'transitionLeave',
        ],
      );
      const { style } = children.props as any;
      return cloneElement(children, { ...props, style: { ...props.style, ...style } } as any);
    }
    return children;
  }
}
