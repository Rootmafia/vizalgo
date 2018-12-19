import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/AppHeader';

import './style.scss';

export const AppTemplate = ({ children }) => (
  <Layout className="layout app_template">
    <AppHeader/>
    <Layout.Content className="app_template_content">
      {children}
    </Layout.Content>
  </Layout>
);
