import React from "react"
import { Button, Modal, Form, Input , Select} from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const Option = Select.Option;

      function onChange(value) {
        console.log(`selected ${value}`);
      }

      function onBlur() {
        console.log("blur");
      }

      function onFocus() {
        console.log("focus");
      }

      function onSearch(val) {
        console.log("search:", val);
      }
     
      
      return (
        <Modal
          visible={visible}
          title="Create a new Sub module"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          
        >
          <Form layout="vertical">

          <Form.Item label="Module Id "  >
              {getFieldDecorator('Module Id', {
                rules: [{ message: 'Please input the title of collection!' }],
              })(<Input disabled/>)}
            </Form.Item>
            
            <Form.Item label="Sub Module Name">
            
                  <Select
                    showSearch
                    style={{ width: 225 }}
                    placeholder="Select Sub Module"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Module 1">Module 1</Option>
                    <Option value="Module 2"> Module 2</Option>
                    <Option value="Module 3">Module 3</Option>
                  </Select>
                </Form.Item>
         
            
          </Form>
        </Modal>
      );
    }
  },
);

class CollectionssubPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <br/>
        <Button type="primary" onClick={this.showModal}>
       Sub Module
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionssubPage;