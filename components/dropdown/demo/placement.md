---
order: 1
title:
  zh-CN: 弹出位置
  en-US: Placement
---

## zh-CN

支持 6 个弹出位置。

## en-US

Support 6 placements.

````jsx
import { Menu, Dropdown, Button } from 'choerodon-hap-ui';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>bottomCenter</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay={menu} placement="topLeft">
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topCenter">
      <Button>topCenter</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topRight">
      <Button>topRight</Button>
    </Dropdown>
  </div>,
  mountNode);
````

````css
#components-dropdown-demo-placement .c7n-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
````
