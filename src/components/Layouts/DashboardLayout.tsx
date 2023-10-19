import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import { sidebarItems } from '../../constants/sidebaritems'
import { USER_ROLE } from '../../constants/role'
import Link from 'next/link'
import Image from 'next/image'
const { Header, Sider, Content } = Layout

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const role = USER_ROLE.SUPER_ADMIN
  return (
    <Layout>
      <Sider
        className='h-screen'
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className='demo-logo-vertical mt-10' />

        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={sidebarItems(role)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className='flex justify-between items-center'>
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Link
              className='text-xl font-mono flex justify-center items-center gap-x-1 pr-5'
              href='/'
            >
              <Image src='/logo.svg' width={150} height={40} alt='logo' />
            </Link>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
