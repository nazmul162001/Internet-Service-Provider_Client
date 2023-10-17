import React from 'react'
import { Tabs } from 'antd'
import HomeInternet from './ServiceComponent/HomeInternet'

const ServiceCategoryLatest = () => {
  return (
    <section className='w-full h-screen my-10 px-5 md:px-10'>
      <h2 className='w-full text-center py-3 mb-10 text-2xl md:text-3xl lg:text-4xl font-medium text-[#112164]'>
        Service By Category
      </h2>
      <Tabs tabPosition='left'>
        <Tabs.TabPane tab='Wifi Internet' key='1'>
          <HomeInternet />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Mobile Connection' key='2'>
          Content of Tab 2
        </Tabs.TabPane>
        <Tabs.TabPane tab='TV Box' key='3'>
          Content of Tab 3
        </Tabs.TabPane>
        <Tabs.TabPane tab='Smart Home' key='4'>
          Content of Tab 4
        </Tabs.TabPane>
        <Tabs.TabPane tab='Satellite TV' key='5'>
          Content of Tab 5
        </Tabs.TabPane>
        <Tabs.TabPane tab='Internet' key='6'>
          Content of Tab 5
        </Tabs.TabPane>
        <Tabs.TabPane tab='Broadband' key='7'>
          Content of Tab 5
        </Tabs.TabPane>
        <Tabs.TabPane tab='Business' key='8'>
          Content of Tab 5
        </Tabs.TabPane>
      </Tabs>
    </section>
  )
}

export default ServiceCategoryLatest
