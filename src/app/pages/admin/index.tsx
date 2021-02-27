import { useState, useEffect, FC } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ManagerApple from './components/apple';
import Dashboard from './components/dashboard';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Admin: FC = (): JSX.Element => {


    return (
        <Layout style={{ height: "100vh" }}>
            <Dashboard></Dashboard>
            <ManagerApple  ></ManagerApple>
        </Layout >
    )

}
export default Admin