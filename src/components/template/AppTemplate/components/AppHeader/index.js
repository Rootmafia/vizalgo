import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const AppHeader = ({ children, location }) => (
  <Layout.Header>
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link to="/">Algorithms</Link>
      </Menu.Item>
      <Menu.Item key="/workspace">
        <Link to="/workspace">Workspace</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default withRouter(AppHeader);
