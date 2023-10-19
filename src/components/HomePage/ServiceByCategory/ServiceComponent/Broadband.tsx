import { useGetServiceByCategoryQuery } from '@/redux/feature/service/serviceApiSlice'
import WhatWeDoCard from '../../WhatWeDo/WhatWeDoCard'

const Broadband = ({ minPrice, maxPrice }: any) => {
  minPrice = parseInt(minPrice)
  maxPrice = parseInt(maxPrice)

  const { data: services } = useGetServiceByCategoryQuery({
    minPrice,
    maxPrice,
    category: 'tvBox',
  })

  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {services?.data?.map((service: any) => (
        <WhatWeDoCard key={service.id} bg='#F5F5F5' service={service} />
      ))}
    </div>
  )
}

export default Broadband
