import React from 'react';
import { mount } from 'enzyme';
import Upload from '..';
import Form from '../../form';
import { errorRequest, successRequest } from './requests';

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const fileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/IQKRngzUuFzJzGzRJXUs.png',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/IQKRngzUuFzJzGzRJXUs.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

describe('Upload List', () => {
  it('should use file.thumbUrl for <img /> in priority', () => {
    const wrapper = mount(
      <Upload defaultFileList={fileList} listType="picture">
        <button type="button">upload</button>
      </Upload>
    );
    fileList.forEach((file, i) => {
      const linkNode = wrapper.find('.c7n-upload-list-item-thumbnail').at(i);
      const imgNode = wrapper.find('.c7n-upload-list-item-thumbnail img').at(i);
      expect(linkNode.prop('href')).toBe(file.url);
      expect(imgNode.prop('src')).toBe(file.thumbUrl);
    });
  });

  it('should remove correct item when uid is 0', async () => {
    const list = [{
      uid: 0,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/IQKRngzUuFzJzGzRJXUs.png',
    }, {
      uid: 1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/IQKRngzUuFzJzGzRJXUs.png',
    }];
    const wrapper = mount(
      <Upload defaultFileList={list}>
        <button type="button">upload</button>
      </Upload>
    );
    expect(wrapper.find('.c7n-upload-list-item').length).toBe(2);
    wrapper.find('.c7n-upload-list-item').at(0).find('.icon-close').simulate('click');
    await delay(400);
    wrapper.update();
    expect(wrapper.find('.c7n-upload-list-item').hostNodes().length).toBe(1);
  });

  it('should be uploading when upload a file', (done) => {
    let wrapper;
    const onChange = ({ file }) => {
      if (file.status === 'uploading') {
        expect(wrapper.render()).toMatchSnapshot();
      }
      if (file.status === 'done') {
        expect(wrapper.render()).toMatchSnapshot();
        done();
      }
    };
    wrapper = mount(
      <Upload
        action="http://jsonplaceholder.typicode.com/posts/"
        onChange={onChange}
        customRequest={successRequest}
      >
        <button type="button">upload</button>
      </Upload>
    );
    wrapper.find('input').simulate('change', {
      target: {
        files: [
          { filename: 'foo.png' },
        ],
      },
    });
  });

  it('handle error', (done) => {
    let wrapper;
    const onChange = ({ file }) => {
      if (file.status !== 'uploading') {
        expect(wrapper.render()).toMatchSnapshot();
        done();
      }
    };
    wrapper = mount(
      <Upload
        action="http://jsonplaceholder.typicode.com/posts/"
        onChange={onChange}
        customRequest={errorRequest}
      >
        <button type="button">upload</button>
      </Upload>
    );
    wrapper.find('input').simulate('change', {
      target: {
        files: [
          { filename: 'foo.png' },
        ],
      },
    });
  });

  it('does concat filelist when beforeUpload returns false', () => {
    const handleChange = jest.fn();
    const wrapper = mount(
      <Upload
        listType="picture"
        defaultFileList={fileList}
        onChange={handleChange}
        beforeUpload={() => false}
      >
        <button type="button">upload</button>
      </Upload>
    );

    wrapper.find('input').simulate('change', {
      target: {
        files: [
          { filename: 'foo.png' },
        ],
      },
    });

    expect(wrapper.state().fileList.length).toBe(fileList.length + 1);
    expect(handleChange.mock.calls[0][0].fileList).toHaveLength(3);
  });

  it('work with form validation', () => {
    let errors;
    class TestForm extends React.Component {
      handleSubmit = () => {
        const { form: { validateFields } } = this.props;
        validateFields((err) => {
          errors = err;
        });
      }

      render() {
        const { form: { getFieldDecorator } } = this.props;

        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('file', {
                valuePropname: 'fileList',
                getValueFromEvent: e => e.fileList,
                rules: [
                  {
                    required: true,
                    validator: (rule, value, callback) => {
                      if (!value || value.length === 0) {
                        callback('file required');
                      } else {
                        callback();
                      }
                    },
                  },
                ],
              })(
                <Upload
                  beforeUpload={() => false}
                >
                  <button type="button">upload</button>
                </Upload>
              )}
            </Form.Item>
          </Form>
        );
      }
    }

    const App = Form.create()(TestForm);
    const wrapper = mount(<App />);
    wrapper.find(Form).simulate('submit');
    expect(errors.file.errors).toEqual([{ message: 'file required', field: 'file' }]);

    wrapper.find('input').simulate('change', {
      target: {
        files: [
          { filename: 'foo.png' },
        ],
      },
    });
    wrapper.find(Form).simulate('submit');
    expect(errors).toBeNull();
  });

  it('should support onPreview', () => {
    const handlePreview = jest.fn();
    const wrapper = mount(
      <Upload
        listType="picture-card"
        defaultFileList={fileList}
        onPreview={handlePreview}
      >
        <button type="button">upload</button>
      </Upload>
    );
    wrapper.find('.icon-visibility').at(0).simulate('click');
    expect(handlePreview).toBeCalledWith(fileList[0]);
    wrapper.find('.icon-visibility').at(1).simulate('click');
    expect(handlePreview).toBeCalledWith(fileList[1]);
  });

  it('should support onRemove', async () => {
    const handleRemove = jest.fn();
    const handleChange = jest.fn();
    const wrapper = mount(
      <Upload
        listType="picture-card"
        defaultFileList={fileList}
        onRemove={handleRemove}
        onChange={handleChange}
      >
        <button type="button">upload</button>
      </Upload>
    );
    wrapper.find('.icon-delete').at(0).simulate('click');
    expect(handleRemove).toBeCalledWith(fileList[0]);
    wrapper.find('.icon-delete').at(1).simulate('click');
    expect(handleRemove).toBeCalledWith(fileList[1]);
    await delay(0);
    expect(handleChange.mock.calls.length).toBe(2);
  });

  it('should generate thumbUrl from file', async () => {
    const handlePreview = jest.fn();
    const newFileList = [...fileList];
    const newFile = { ...fileList[0], uid: -3, originFileObj: new File([], 'xxx.png') };
    delete newFile.thumbUrl;
    newFileList.push(newFile);
    const wrapper = mount(
      <Upload
        listType="picture-card"
        defaultFileList={newFileList}
        onPreview={handlePreview}
      >
        <button type="button">upload</button>
      </Upload>
    );
    wrapper.setState({});
    await delay(20);
    expect(wrapper.state().fileList[2].thumbUrl).not.toBeFalsy();
  });

  it('should non-image format file preview', () => {
    const list = [
      {
        ...fileList[0],
        uid: -3,
        url: 'https://cdn.xxx.com/aaa.zip',
        thumbUrl: 'data:application/zip;base64,UEsDBAoAAAAAADYZYkwAAAAAAAAAAAAAAAAdAAk',
        originFileObj: new File([], 'aaa.zip'),
      },
    ];

    const wrapper = mount(
      <Upload
        listType="picture"
        defaultFileList={list}
      >
        <button type="button">upload</button>
      </Upload>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
