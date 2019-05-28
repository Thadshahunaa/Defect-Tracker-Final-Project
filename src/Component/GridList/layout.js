import React, { Component } from "react";
import { Row, Col } from "antd";
import Form from "../Form";
import CollectionssubPage from "../Subform";
import Tablex from "../Table/Tablee";

class Fromlayout extends Component {
  render() {
    return (
      
      <div>
        
        <Row>
        <Col span={18} push={6}>
            <Form />
          </Col>
          <Col span={6} pull={18}>
            <CollectionssubPage/>
          </Col>
         
        <Col span={24} >
        <Tablex />
          </Col>
          
        </Row>
        
      </div>
    );
  }
}
export default Fromlayout;
