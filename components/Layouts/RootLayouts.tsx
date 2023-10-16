import React from 'react'
import { Layout, theme } from 'antd'
import Navbar from '../Navbar/Navbar'
import Image from 'next/image'

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
      <Footer>
        <div className='w-full h-32 grid grid-cols-1 md:grid-cols-2 items-center justify-between border-t-4'>
          <div className='flex flex-wrap items-center justify-center md:justify-normal gap-3 md:gap-10'>
            <Image src='/logo.svg' width={100} height={70} alt='footer/image' />
            <span className='text-[#6c757d]'>
              Copyright © 2023 @assignment_9.
            </span>
          </div>
          <div className='flex justify-center items-center'>
            <ul className='flex items-center gap-3 text-[#6c757d]'>
              <li className='hover:text-[#0d99e5]'>Legal</li>
              <li className='hover:text-[#0d99e5]'>Privacy</li>
              <li className='hover:text-[#0d99e5]'>Sitemap</li>
            </ul>
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default RootLayout
