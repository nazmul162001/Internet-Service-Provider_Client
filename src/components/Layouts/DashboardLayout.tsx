import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import { sidebarItems } from '../../constants/sidebaritems'
import { USER_ROLE } from '../../constants/role'
import Link from 'next/link'
// import {Image } from 'antd'
import { useGetProfileQuery, userApi } from '@/redux/feature/user/userApiSlice'
const { Header, Sider, Content } = Layout
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { getAccessToken } from '@/redux/api/apiSlice'
import useUserRole from '../Role/Role'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)

  // const userRole = useUserRole()
  const {data: profile } = useGetProfileQuery()
  console.log(profile)



  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const role = 'super_admin'
  // const role = 'admin'
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default DashboardLayout
