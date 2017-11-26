import React from 'react';
import { Component } from '../utils/';
import Icon from '../icon';

export default class DatePanelHead extends Component {
  onClick(type) {
    const { value, onClickPageBtn } = this.props;
    let year = value.getFullYear();
    let month = value.getMonth() + 1;
    const day = value.getDate();
    switch (type) {
      case 'prevYear': year -= 1; break;
      case 'prevMonth':
        if (month === 1) {
          month = 12;
          year -= 1;
        } else {
          month -= 1;
        }
        break;
      case 'nextYear': year += 1; break;
      case 'nextMonth':
        if (month === 12) {
          month = 1;
          year += 1;
        } else {
          month += 1;
        }
        break;
      default: break;
    }
    if (onClickPageBtn) onClickPageBtn(new Date(year, month - 1, day));
  }
  render() {
    const { prefixCls, value } = this.props;
    return (
      <div className={`${prefixCls}-bar`}>
        <a className={`${prefixCls}-prev-year-btn`} onClick={this.onClick.bind(this, 'prevYear')}>
          <Icon type="d-arrow-left" />
        </a>
        <a className={`${prefixCls}-prev-month-btn`} onClick={this.onClick.bind(this, 'prevMonth')}>
          <Icon type="arrow-down" />
        </a>
        <a className={`${prefixCls}-month-select`}>
          {value.getFullYear()}
          <Icon type="caret-down" />
        </a>
        <a className={`${prefixCls}-year-select`}>
          {value.getMonth() + 1}
          <Icon type="caret-down" />
        </a>
        <a className={`${prefixCls}-next-year-btn`} onClick={this.onClick.bind(this, 'nextYear')}>
          <Icon type="d-arrow-right" />
        </a>
        <a className={`${prefixCls}-next-month-btn`} onClick={this.onClick.bind(this, 'nextMonth')}>
          <Icon type="arrow-down" />
        </a>
      </div>
    );
  }
}
