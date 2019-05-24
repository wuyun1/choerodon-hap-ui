---
order: 2
title:
  zh-CN: 文案展现
  en-US: Show copywriting
---

## zh-CN

给评分组件加上文案展示。

## en-US

Add copywriting in rate components.

````jsx
import { Rate } from 'choerodon-hap-ui';

class Rater extends React.Component {
  state = {
    value: 3,
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="c7n-rate-text">{value} stars</span>}
      </span>
    );
  }
}

ReactDOM.render(<Rater />, mountNode);
````