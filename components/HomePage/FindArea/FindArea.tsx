import PrimaryButton from '../../Button/PrimaryButton'

const FindArea = () => {
  return (
    <section
      className='w-full h-full md:h-[40vh] my-10 px-5 md:px-10 flex justify-center items-center'
      style={{
        background: `url('/blue_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <h3 className='font-medium text-lg md:text-2xl mt-3 text-white'>
          Enter your address to find deals in your area:
        </h3>
        <div className='flex gap-3 justify-center items-center py-3 flex-wrap'>
          <input
            className='p-2 border border-gray'
            type='text'
            placeholder='Your District*'
          />
          <input
            className='p-2 border border-gray'
            type='text'
            placeholder='Your Area/City*'
          />
          <PrimaryButton title='Check Availability' bgColor='bg_one' />
        </div>
      </div>
    </section>
  )
}

export default FindArea
