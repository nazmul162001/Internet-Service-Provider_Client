import { Image } from 'antd'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <section className='my-10 px-5 md:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <p className='text-[#0d99e5] font-sans font-medium text-lg'>
            Unlimited possible
          </p>
          <h2 className='text-[#112164] font-bold text-2xl md:text-3xl lg:text-4xl'>
            Get your fastest speed
          </h2>
          <div className='my-3 w-full flex justify-center md:justify-normal'>
            <Image src='/map.png' width={400} height={400} alt='Image' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#112164]'>Frequently Asked Questions</h2>
          <Accordion />
        </div>
      </div>
    </section>
  )
}

export default Faq
