import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const ExtraTwo = () => {
  return (
    <section className='w-full h-screen bg-white pt-10 mb-16'>
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div
          className='w-full h-[60vh]'
          style={{
            background: `url('/couple2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className='md:px-16 '>
          <span className='text-[#0d99e5] text-lg font-sans font-medium'>
            Unlimited possible
          </span>
          <h2 className=' py-4 text-[#112164] font-bold text-xl md:text-3xl'>
            The best TV experience <br /> powered by NetFx Internet.
          </h2>
          <p className='py-2 text-[#6c757d] font-normal font-sans text-sm'>
            We’ve streamlined our plans to give you the fastest internet
            available at <br /> your address for one low monthly price.
          </p>
          <div className='pt-8 py-1 flex items-center gap-2'>
            <p>
              <IoMdCheckmarkCircleOutline className='text-[#223DB2] text-xl' />
            </p>
            <p className='py-2 text-[#6c757d] font-normal font-sans text-sm'>
              The speed you need at a price you’ll love—with plans up to
              100Mbps*
            </p>
          </div>
          <div className='py-1 flex items-center gap-2'>
            <p>
              <IoMdCheckmarkCircleOutline className='text-[#223DB2] text-xl' />
            </p>
            <p className='py-2 text-[#6c757d] font-normal font-sans text-sm'>
              The bandwidth to power multiple devices at once
            </p>
          </div>
          <div className='py-1 flex items-center gap-2'>
            <p>
              <IoMdCheckmarkCircleOutline className='text-[#223DB2] text-xl' />
            </p>
            <p className='py-2 text-[#6c757d] font-normal font-sans text-sm'>
              Seamless streaming, working, and gaming
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtraTwo
