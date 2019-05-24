/* eslint-disable import/prefer-default-export */
export function selectDate(wrapper, date, index) {
  let calendar = wrapper;
  if (index !== undefined) {
    calendar = wrapper.find('.c7n-calendar-range-part').at(index);
  }
  calendar.find({ title: date.format('LL'), role: 'gridcell' }).simulate('click');
}

export function hasSelected(wrapper, date) {
  return wrapper.find({ title: date.format('LL'), role: 'gridcell' }).hasClass('c7n-calendar-selected-day');
}

export function openPanel(wrapper) {
  wrapper.find('.c7n-calendar-picker-input').hostNodes().simulate('click');
}

export function clearInput(wrapper) {
  wrapper.find('.c7n-calendar-picker-clear').hostNodes().simulate('click');
}

export function nextYear(wrapper) {
  wrapper.find('.c7n-calendar-next-year-btn').simulate('click');
}

export function nextMonth(wrapper) {
  wrapper.find('.c7n-calendar-next-month-btn').simulate('click');
}
