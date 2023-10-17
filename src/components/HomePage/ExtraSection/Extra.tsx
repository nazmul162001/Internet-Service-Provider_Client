import PrimaryButton from '../../Button/PrimaryButton'

const Extra = () => {
  return (
    <section
      className='mt-10 w-full h-[80vh] flex flex-col justify-center pl-5 md:pl-16'
      style={{
        background: `url('/couple.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-full md:w-2/3'>
        <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold'>
          Your Local High Speed <br /> Internet Provider
        </h1>
        <div className='my-3 flex flex-wrap justify-center items-center md:justify-normal gap-3 pb-4'>
          <PrimaryButton title='Check Availability' bgColor='bg_two' />
          <PrimaryButton title='Check Availability' bgColor='border' />
        </div>
        <hr className='w-full md:w-1/2' />
        <div className='pt-4 w-full md:w-1/2'>
          <p className=' text-white text-left font-normal font-sans text-sm'>
            NetFx is an award winning high speed internet provider offering
            reliable and affordable internet services in NYC, with gigabit
            internet speeds up to 940* Mbps.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Extra
