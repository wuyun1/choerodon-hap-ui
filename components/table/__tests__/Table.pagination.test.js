import React from 'react';
import { mount, render } from 'enzyme';
import noop from 'lodash/noop';
import Table from '..';

describe('Table.pagination', () => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }];

  const data = [
    { key: 0, name: 'Jack' },
    { key: 1, name: 'Lucy' },
    { key: 2, name: 'Tom' },
    { key: 3, name: 'Jerry' },
  ];

  const pagination = { className: 'my-page', pageSize: 2 };

  function createTable(props) {
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        {...props}
      />
    );
  }

  function renderedNames(wrapper) {
    return wrapper.find('TableRow').map(row => row.props().record.name);
  }

  it('renders pagination correctly', () => {
    const wrapper = render(createTable());
    expect(wrapper).toMatchSnapshot();
  });

  it('should not show pager if pagination.hideOnSinglePage is true and only 1 page', () => {
    const wrapper = mount(createTable({ pagination: { pageSize: 3, hideOnSinglePage: true } }));
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    wrapper.setProps({ pagination: { pageSize: 3, hideOnSinglePage: false } });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    wrapper.setProps({ pagination: { pageSize: 4, hideOnSinglePage: true } });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(0);
    wrapper.setProps({ pagination: { pageSize: 4, hideOnSinglePage: false } });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    wrapper.setProps({ pagination: { pageSize: 5, hideOnSinglePage: true } });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(0);
    wrapper.setProps({ pagination: { pageSize: 5, hideOnSinglePage: false } });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
  });

  it('paginate data', () => {
    const wrapper = mount(createTable());

    expect(renderedNames(wrapper)).toEqual(['Jack', 'Lucy']);
    wrapper.find('.c7n-pagination-next').simulate('click');
    expect(renderedNames(wrapper)).toEqual(['Tom', 'Jerry']);
  });


  it('repaginates when pageSize change', () => {
    const wrapper = mount(createTable());

    wrapper.setProps({ pagination: { pageSize: 1 } });
    expect(renderedNames(wrapper)).toEqual(['Jack']);
  });

  it('fires change event', () => {
    const handleChange = jest.fn();
    const handlePaginationChange = jest.fn();
    const wrapper = mount(createTable({
      pagination: { ...pagination, onChange: handlePaginationChange, onShowSizeChange: noop },
      onChange: handleChange,
    }));

    wrapper.find('.c7n-pagination-next').simulate('click');

    expect(handleChange).toBeCalledWith(
      {
        className: 'my-page',
        current: 2,
        pageSize: 2,
        size: 'default',
      },
      {},
      {},
      [],
    );

    expect(handlePaginationChange).toBeCalledWith(2, 2);
  });

  // https://codepen.io/afc163/pen/dVeNoP?editors=001
  it('should have pager when change pagination from false to undefined', () => {
    const wrapper = mount(createTable({ pagination: false }));
    expect(wrapper.find('.c7n-pagination')).toHaveLength(0);
    wrapper.setProps({ pagination: undefined });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    expect(wrapper.find('.c7n-pagination-total-text').at(0).text()).toEqual('1 - 4 / 4');
  });

  // https://codepen.io/afc163/pen/pWVRJV?editors=001
  it('should display pagination as prop pagination change between true and false', () => {
    const wrapper = mount(createTable());
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    expect(wrapper.find('.c7n-pagination-total-text').at(0).text()).toEqual('1 - 2 / 4');
    wrapper.setProps({ pagination: false });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(0);
    wrapper.setProps({ pagination });
    wrapper.update();
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    expect(wrapper.find('.c7n-pagination-total-text').at(0).text()).toEqual('1 - 2 / 4');
    wrapper.find('.c7n-pagination-next').simulate('click');
    expect(renderedNames(wrapper)).toEqual(['Tom', 'Jerry']);
    wrapper.setProps({ pagination: false });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(0);
    wrapper.setProps({ pagination: true });
    expect(wrapper.find('.c7n-pagination')).toHaveLength(1);
    expect(wrapper.find('.c7n-pagination-total-text').at(0).text()).toEqual('1 - 4 / 4'); // pageSize will be 10
    expect(renderedNames(wrapper)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
  });

  it('change to correct page when data source changes', () => {
    const wrapper = mount(createTable({ pagination: { pageSize: 1 } }));
    wrapper.find('.c7n-pagination-next').simulate('click');
    wrapper.setProps({ dataSource: [data[0]] });
    expect(wrapper.find('.c7n-pagination-total-text').at(0).text()).toEqual('1 - 1 / 1');
  });

  it('specify the position of pagination', () => {
    const wrapper = mount(createTable({ pagination: { position: 'top' } }));
    expect(wrapper.find('.c7n-spin-container').children()).toHaveLength(2);
    expect(wrapper.find('.c7n-spin-container').childAt(0).find('.c7n-pagination')).toHaveLength(1);
    wrapper.setProps({ pagination: { position: 'bottom' } });
    expect(wrapper.find('.c7n-spin-container').children()).toHaveLength(2);
    expect(wrapper.find('.c7n-spin-container').childAt(1).find('.c7n-pagination')).toHaveLength(1);
    wrapper.setProps({ pagination: { position: 'both' } });
    expect(wrapper.find('.c7n-spin-container').children()).toHaveLength(3);
    expect(wrapper.find('.c7n-spin-container').childAt(0).find('.c7n-pagination')).toHaveLength(1);
    expect(wrapper.find('.c7n-spin-container').childAt(2).find('.c7n-pagination')).toHaveLength(1);
  });
});
