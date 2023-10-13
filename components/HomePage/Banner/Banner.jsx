import Image from 'next/image'
import PrimaryButton from '../../Button/PrimaryButton'

const Banner = () => {
  return (
    <div
      className='w-full h-screen flex justify-center items-center'
      style={{
        background: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-full h-full bg-white bg-opacity-90'>
        <div
          className='w-full h-full flex justify-center items-center'
          style={{
            background: `url('/bg-left.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div>
            <h1 className='text-[#112164] text-2xl md:text-3xl lg:text-5xl font-extrabold text-center'>
              Find internet providers in <br /> your area
            </h1>
            <p className='py-2 text-[#6c757d] text-center font-normal font-sans text-sm'>
              This is the place to learn about NextFx internet-the high speed,
              secure, and <br /> reliable internet connection that lets you do
              what you love online.
            </p>

            {/* button  */}
            <div className='my-3 flex justify-center items-center gap-3 flex-wrap'>
              <PrimaryButton
                title='Learn More'
                bgColor='bg_one'
              />
              <PrimaryButton
                title='Check Availability'
                bgColor='bg_two'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
