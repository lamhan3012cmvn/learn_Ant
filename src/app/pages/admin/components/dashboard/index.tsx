import './style.css'
import logo from '../../../../../img/logo.jpg'
import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard(): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onCollapse = (): void => {
        setCollapsed(!collapsed)
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" >
                <h2>Mac
                    {!collapsed ? " Xinh Tốt" : ""}
                </h2>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key='todoList' title={<span><Icon type='book' /> <span>TodoList</span></span>}>
                    <Menu.Item key="CreateTodo">Create</Menu.Item>
                    <Menu.Item key="ViewTodo">View Data</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="apple"
                    title={
                        <span>
                            <Icon type="apple" />
                            <span>Apple</span>
                        </span>
                    }
                >
                    <Menu.Item key="CreateApple">Create</Menu.Item>
                    <Menu.Item key="ViewApple">View Data</Menu.Item>
                </SubMenu>

                <Menu.Item key="about">
                    <Icon type="info" />
                    <span>About</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Dashboard
