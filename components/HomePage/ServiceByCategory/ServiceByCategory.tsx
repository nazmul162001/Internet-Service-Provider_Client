import React, { useState } from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import HomeInternet from './ServiceComponent/HomeInternet'

const ServiceByCategory = () => {
  const [selectedTab, setSelectedTab] = useState('wifi internet')
  const handleTabClick = (value: any) => {
    setSelectedTab(value)
  }

  const data = [
    {
      label: 'Wifi Internet',
      value: 'wifi internet',
      desc: <HomeInternet />,
    },
    {
      label: 'Mobile Connection',
      value: 'mobile connection',
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'TV Box',
      value: 'tv box',
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Smart Home',
      value: 'smart home',
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'Satellite TV',
      value: 'satellite tv',
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Internet',
      value: 'internet',
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Broadband',
      value: 'broadband',
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Business',
      value: 'business',
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ]

  return (
    <section className='w-full h-full py-10 px-5 md:px-10'>
      <h2 className='w-full text-center py-3 mb-10 text-2xl md:text-3xl lg:text-4xl font-medium text-[#112164]'>
        Service By Category
      </h2>
      <Tabs value='html' orientation='vertical'>
        <TabsHeader className='w-48 rounded-none bg-white'>
          {data.map(({ label, value }) => (
            <Tab
              //   className='border-2 mb-2 h-12 hover:bg-[#112164] hover:text-white'
              key={value}
              value={value}
              //@ts-ignore
              active={selectedTab === value}
              onClick={() => handleTabClick(value)}
              className={`border-2 mb-2 h-12 ${
                selectedTab === value ? 'active-tab' : 'hover-tab'
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className='mx-5 md:mx-10 p-3 bg-white'>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className='py-0'>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  )
}

export default ServiceByCategory
