import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'

import styles from './Layout.module.scss'

const { Header, Content, Footer } = Layout

const AppLayout = props => (
  <Layout>
    <Header className={styles.header}>
      <div className={styles.fakeLogo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Search</Menu.Item>
      </Menu>
    </Header>
    <Content className={styles.content}>
      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </Content>
    <Footer className={styles.footer}>
      ©2019 Created by Dung Huynh
    </Footer>
  </Layout>
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
