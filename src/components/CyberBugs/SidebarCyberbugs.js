import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarsOutlined,
    SearchOutlined,
    PlusOutlined
} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux'
import {OPEN_FORM_CREATE_TASK} from '../../redux/constants/Cyberbugs/Cyberbugs.js'
import FormCreateTask from '../Forms/FormCreateTask/FormCreateTask.js';

const { Header, Sider, Content } = Layout;
export default function SidebarCyberbugs() {
    const [state, setState] = useState({
        collapsed: false,
    })
    const dispatch = useDispatch()
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return (
        <div>

            <Sider trigger={null} collapsible collapsed={state.collapsed} style={{ height: '100%' }}>
                <div className="text-right pr-2" onClick={toggle} ><BarsOutlined style={{ cursor: 'pointer', color: '#fff', fontSize: 25 }} /></div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<PlusOutlined style={{ fontSize: 20 }} onClick={() => {
                        dispatch({
                            type:OPEN_FORM_CREATE_TASK,
                            ComponentContentDrawer:<FormCreateTask/>,
                            title:'Create task'            
                        })
                    }} />} >
                        <span className="mb-2">Create task</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: 20 }} />}>
                        Search
                     </Menu.Item>

                </Menu>
            </Sider>
        </div>


    )
}
