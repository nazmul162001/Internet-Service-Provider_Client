import React, { useState } from 'react'
import { Input, Tabs } from 'antd'
import HomeInternet from './ServiceComponent/HomeInternet'
import MobileConnection from './ServiceComponent/MobileConnection'
import TvBox from './ServiceComponent/TvBox'
import SmartHome from './ServiceComponent/SmartHome'
import SatelliteTV from './ServiceComponent/SatelliteTV'
import Internet from './ServiceComponent/Internet'
import Broadband from './ServiceComponent/Broadband'
import Business from './ServiceComponent/Business'

const ServiceCategoryLatest = () => {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  return (
    <section className='w-full h-full my-10 px-5 md:px-10'>
      <h2 className='w-full flex justify-center items-center  mb-3 text-2xl md:text-3xl lg:text-4xl font-medium text-[#112164]'>
        Service By Category
      </h2>

      <div className='flex justify-center items-center flex-col w-full h-full'>
        <div className='w-1/2'>
          <h4 className='text-lg text-center pb-2 text-gray-500'>
            filter by price
          </h4>
          <div className='flex justify-center items-center gap-2'>
            <Input
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder='Min Price'
            />
            <Input
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder='Max Price'
            />
          </div>
        </div>
      </div>

      <div className='m-5 bg-white pt-3'>
        <Tabs tabPosition='left'>
          <Tabs.TabPane tab='Wifi Internet' key='1'>
            <HomeInternet minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Mobile Connection' key='2'>
            <MobileConnection minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='TV Box' key='3'>
            <TvBox minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Smart Home' key='4'>
            <SmartHome minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Satellite TV' key='5'>
            <SatelliteTV minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Internet' key='6'>
            <Internet minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Broadband' key='7'>
            <Broadband minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
          <Tabs.TabPane tab='Business' key='8'>
            <Business minPrice={minPrice} maxPrice={maxPrice} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </section>
  )
}

export default ServiceCategoryLatest
