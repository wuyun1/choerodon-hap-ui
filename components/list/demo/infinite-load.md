---
order: 6
title:
  zh-CN: 滚动加载
  en-US: Scrolling loaded
---

## zh-CN

结合 [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller) 实现滚动自动加载列表。

## en-US

The example of infinite load with [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller).

````jsx
import { List, message, Avatar, Spin } from 'choerodon-hap-ui';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  componentWillMount() {
    this.getData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.getData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://choerodon.github.io/choerodon-hap-ui/">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && <Spin className="demo-loading" />}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

ReactDOM.render(<InfiniteListExample />, mountNode);
````

````css
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 300px;
}
.demo-loading {
  position: absolute;
  bottom: -40px;
  left: 50%;
}
````
