import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../../redux/constants/Cyberbugs/Cyberbugs'
const { Option } = Select;

export default function DrawerCyberBugs(props) {
  const { visible, ComponentContentDrawer, callBackSubmit } = useSelector(state => state.drawerReducer);
  const dispatch = useDispatch();

  console.log('visible', visible)
  const showDrawer = () => {
    dispatch({ type: OPEN_DRAWER });
  };

  const onClose = () => {
    dispatch({ type: CLOSE_DRAWER });
  };
  return (
    <>
      {/* <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button> */}
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        {/* Nội dung thay đổi của drawer */}
        {ComponentContentDrawer}
      </Drawer>
    </>
  )
}
