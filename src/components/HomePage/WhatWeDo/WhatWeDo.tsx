import { useState } from 'react'
import PrimaryButton from '../../Button/PrimaryButton'
import WhatWeDoCard from './WhatWeDoCard'
import { useGetServiceQuery } from '@/redux/feature/service/serviceApiSlice'

const WhatWeDo = () => {
  const [isLoadMore, setIsLoadMore] = useState(false)
  const { data: services } = useGetServiceQuery({})

  return (
    <section className='my-16 px-5 md:px-10'>
      <h2 className='text-center pt-8 md:pt-10 lg:pt-16 text-[#112164] font-bold text-2xl md:text-3xl lg:text-4xl mb-8'>
        Available Service
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div>
          <span className='text-[#0d99e5]'>What We Do?</span>
          <h2 className='text-[#112164] text-2xl md:text-3xl lg:text-4xl font-bold md:pr-10'>
            Experience the NetFx unlimited possibilities
          </h2>
        </div>
        <div>
          <p className='py-2 text-[#6c757d] font-normal font-sans text-sm'>
            At NetFx, we specialize in connecting you to the digital world with
            high-speed internet services, delivering endless entertainment
            through cable TV, and ensuring you are always connected with our
            robust mobile network. Our mission is to empower your digital
            experience, providing you with seamless, reliable services, and
            keeping you connected to what matters most.
          </p>
        </div>
      </div>
      {/* what we do card  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8'>
        {services?.data?.map((service: any, index: any) => (
          <WhatWeDoCard key={index} bg='#fff' service={service} />
        ))}
      </div>
      {/* <div
        onClick={() => setIsLoadMore(!isLoadMore)}
        className='flex justify-center items-center'
      >
        <PrimaryButton
          title={isLoadMore ? 'See Less' : 'More Service'}
          bgColor='bg_one'
        />
      </div> */}
    </section>
  )
}

export default WhatWeDo
