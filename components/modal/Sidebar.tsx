import React, { Component } from 'react';
import classNames from 'classnames';
import Dialog, { ModalFuncProps } from './Modal';
import Button from '../button';
import { getConfirmLocale } from './locale';
import { getPrefixCls } from '../configure';

export interface SidebarState {
  open: boolean;
}

export interface SidebarProps extends ModalFuncProps {
  close?: (...args: any[]) => void;
  alwaysCanCancel?: boolean;
}

export default class Sidebar extends Component<SidebarProps, {}> {
  static displayName = 'Sidebar';

  static defaultProps = {
    width: '100%',
    transitionName: 'slide-right',
    maskTransitionName: 'fade',
    confirmLoading: false,
    alwaysCanCancel: false,
    visible: false,
    okType: 'primary',
    funcType: 'raised',
  };

  state: SidebarState;

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleCancel = (e: any) => {
    const onCancel = this.props.onCancel;
    if (onCancel) {
      onCancel(e);
    }
  };

  handleOk = (e: any) => {
    const onOk = this.props.onOk;
    if (onOk) {
      onOk(e);
    }
  };

  renderFooter = () => {
    const props = this.props;
    const { onCancel, onOk, okType, funcType, confirmLoading, alwaysCanCancel } = props;
    const prefixCls = this.getPrefixCls();
    const okCancel = ('okCancel' in props) ? props.okCancel! : true;
    const runtimeLocale = getConfirmLocale();
    const okText = props.okText ||
      (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    const cancelText = props.cancelText || runtimeLocale.cancelText;

    const cancalBtn = okCancel ? (
      <Button
        className={`${prefixCls}-btn-cancel`}
        disabled={!alwaysCanCancel && confirmLoading}
        funcType={funcType}
        onClick={onCancel}
      >
        {cancelText}
      </Button>) : null;
    return (
      <div className={`${prefixCls}-btns`}>
        <Button
          className={`${prefixCls}-btn-ok`}
          loading={confirmLoading}
          funcType={funcType}
          type={okType}
          onClick={onOk}
        >
          {okText}
        </Button>
        {cancalBtn}
      </div>
    );
  };

  handleStatus = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  getPrefixCls() {
    return getPrefixCls('modal', this.props.prefixCls);
  }

  render() {
    const props = this.props;
    const { zIndex, visible, keyboard, footer } = props;
    const prefixCls = this.getPrefixCls();
    const { open } = this.state;
    const classString = classNames(prefixCls, {
        [`${prefixCls}-sidebar`]: true,
        [`${prefixCls}-sidebar-open`]: open,
      },
      props.className);

    return (
      <Dialog
        {...this.props}
        prefixCls={prefixCls}
        animationEnd={this.handleStatus}
        width={props.width}
        className={classString}
        visible={visible}
        title={props.title}
        transitionName={props.transitionName}
        footer={footer === undefined ? this.renderFooter() : footer}
        zIndex={zIndex}
        keyboard={keyboard}
        closable={false}
      >
        {this.props.children}
      </Dialog>
    );
  }
}
