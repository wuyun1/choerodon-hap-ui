---
order: 1
title:
  zh-CN: 受控复选框
  en-US: Controlled CheckBox
---

## zh-CN

受控复选框

## en-US

Controlled CheckBox

````jsx
import { CheckBox } from 'choerodon-ui/pro';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['A'],
    };
  }

  handleChange = (value, oldValue) => {
    console.log('[controlled]', value, '[oldValues]', oldValue);
    const { values } = this.state;
    if (value) {
      values.push(value);
    } else {
      values.splice(values.indexOf(value), 1);
    }
    this.setState({
      values,
    });
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <CheckBox
          name="controlled"
          value="A"
          checked={values.indexOf('A') !== -1}
          onChange={this.handleChange}
        >A
        </CheckBox>
        <CheckBox
          name="controlled"
          value="B"
          checked={values.indexOf('B') !== -1}
          onChange={this.handleChange}
        >B
        </CheckBox>
        <CheckBox
          name="controlled"
          value="C"
          checked={values.indexOf('C') !== -1}
          onChange={this.handleChange}
        >C
        </CheckBox>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
