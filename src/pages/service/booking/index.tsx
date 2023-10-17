import RootLayout from '@/components/Layouts/RootLayouts'
import { ReactElement } from 'react'

const Booking = () => {
  return (
    <section className='w-full h-screen my-10 px-5 flex justify-center'>
      <div className='w-1/2 bg-white'>
        
      </div>
    </section>
  )
}

export default Booking

Booking.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}
