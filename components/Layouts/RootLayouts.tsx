import React from 'react'
import { Layout, theme } from 'antd'
import Navbar from '../Navbar/Navbar'

const { Content, Footer } = Layout

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className='layout'>
      {/* Header  */}
      <Navbar />
      {/* Content  */}
      <Content>
        <div className='site-layout-content' style={{ minHeight: '100vh' }}>
          {children}
        </div>
      </Content>
      {/* Footer  */}
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default RootLayout
