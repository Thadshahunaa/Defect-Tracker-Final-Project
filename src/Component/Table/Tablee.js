import { Table, Button, Modal } from 'antd';
import React, { Component } from 'react'
import { Icon , Form, Input,Popconfirm,} from 'antd';
import { getTwoToneColor } from 'antd/lib/icon/twoTonePrimaryColor';
// import CollectionssubPage from "../From"
import EditPage from "../Editfrom";
import CollectionCreateForm from "../Form"


 

export default class Tablex extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

    render() {
      const columns = [
        {
          title: 'Module Id',
          dataIndex: 'age',
           render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: 'Module Name',
          dataIndex: 'name',
        },
        {
          title: 'SubModule',
          dataIndex: 'address',
          
        },
        {
          title: 'Edit',
          dataIndex: '',
          key:"x",
          render:()=>(
           
            <Icon type="edit" className="datatable-icon" onClick={this.showModal}  />
          
        
          ) 
        },    
              
        {
          title: 'Delete',
          dataIndex: '',
          key:"x",
          render:()=>(    
            <Popconfirm
            title="Are you sure, do you want delete this Company?"
            icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="hello" style={{ color: "red" }}>
              <Icon type="delete" className="datatable-icon" />
              Delete
            </a>
          </Popconfirm>
          )
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Disabled User',
          age: 99,
          address: 'Sidney No. 1 Lake Park',
        },
      ];
      
      // rowSelection object indicates the need for row selection
     
        return (
            <div>
              {/* <Button type="primary" onClick={this.showModal}>
          Modal
        </Button> */}
        <Modal
         
          title="EditModal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Update"
          cancelText="cancel"
        >
          <Form layout="vertical">
            <Form.Item label="Module Id ">
              {/* {getFieldDecorator('Module Id', {
                rules: [{  message: 'Please input the title of collection!' }],
              })(<Input />)} */}
              <Input type="text" placeholder="Please Input"/>
            </Form.Item>
            <Form.Item label="Module Name">
              {/* {getFieldDecorator('description')(<Input type="textarea" />)} */}
              <Input type="text" placeholder="Please Input"/>
            </Form.Item>
            
          </Form>
        </Modal>
 

              <br/>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
  }
