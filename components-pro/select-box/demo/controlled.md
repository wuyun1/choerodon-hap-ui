---
order: 1
title:
  zh-CN: 受控按钮选则框
  en-US: Controlled SelectBox
---

## zh-CN

受控按钮选则框。

## en-US

Controlled SelectBox.

````jsx
import { SelectBox } from 'choerodon-ui/pro';

const { Option } = SelectBox;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'wu',
    };
  }

  handleChange = (value, oldValue) => {
    console.log('[constrolled]', 'newValue', value, '[oldValue]', oldValue);
    this.setState({
      value,
    });
  }

  render() {
    return (
      <SelectBox value={this.state.value} onChange={this.handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="wu">Wu</Option>
      </SelectBox>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
