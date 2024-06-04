import Layout from "antd/es/layout";
import Menu, { MenuProps } from "antd/es/menu";
import React, { useState } from "react";
import theme from "antd/es/theme";
import Breadcrumb from "antd/es/breadcrumb";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));



const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Layout>
                <Sider style={{ background: colorBgContainer }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <MainMenu></MainMenu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/* 这是版本 <5.3.0  时使用的*/}
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}

                    {/* 这是版本 >= 5.3.0时使用的， 若不用这个，Console 会有warning */}
                    <Breadcrumb items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} style={{ margin: '16px 0' }}></Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default View;