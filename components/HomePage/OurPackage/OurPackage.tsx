import { BsFillPatchCheckFill } from 'react-icons/bs'
import PrimaryButton from '../../Button/PrimaryButton'

const OurPackage = () => {
  return (
    <section className='w-full h-full my-10 px-5 md:px-10'>
      <div className='flex flex-col justify-center items-center py-10'>
        <span className='text-[#0d99e5]'>Network Packages</span>
        <h1 className='text-[#112164] text-2xl md:text-3xl lg:text-4xl font-bold py-2'>
          Our Best Value Bundles
        </h1>
        <p className='text-[#6c757d] font-sans'>
          Get the best deals on TV, Internet & Home Phone for New York Ci
        </p>
      </div>
      {/* pricing card  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10'>
        {/* card ---1  */}
        <div className='bg-white w-full h-full px-3 md:px-8 py-3 rounded border-t-8 border-[#4DDFFD] relative '>
          <div
            className='w-full h-16 my-3 '
            style={{
              background: `url('/asset-1.svg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <span className='text-center w-full block text-[#6c757d] font-medium tracking-widest '>
              STANDARD
            </span>
            <h3 className='text-center text-[#4F65C2] font-bold text-xl md:text-2xl lg:text-3xl'>
              <sup className='text-sm'>$</sup> 49.99{' '}
              <sub className='text-sm'>/mo</sub>
            </h3>

            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>
                Free Google Voice Remote and DVR Included
              </p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>60+ HD Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>Local Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>190 Channels</p>
            </div>
            <div className='py-3'>
              <PrimaryButton title='Booking' bgColor='bg_two' />
            </div>
            <p className='text-[#6c757d] font-sans text-sm underline text-center'>
              Or call (+880) 1789141408
            </p>
          </div>
        </div>

        {/* card ---2  */}
        <div className='bg-white w-full h-full px-3 md:px-8 py-3 rounded border-t-8 border-[#4DDFFD] relative '>
          <div
            className='w-full h-16 my-3 '
            style={{
              background: `url('/asset-2.svg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <span className='text-center w-full block text-[#6c757d] font-medium tracking-widest '>
              SILVER
            </span>
            <h3 className='text-center text-[#4F65C2] font-bold text-xl md:text-2xl lg:text-3xl'>
              <sup className='text-sm'>$</sup> 74.99{' '}
              <sub className='text-sm'>/mo</sub>
            </h3>

            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>
                Free Google Voice Remote and DVR Included
              </p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>110+ HD Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>Local Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>190+ Channels</p>
            </div>
            <div className='py-3'>
              <PrimaryButton title='Booking' bgColor='bg_two' />
            </div>
            <p className='text-[#6c757d] font-sans text-sm underline text-center'>
              Or call (+880) 1789141408
            </p>
          </div>
        </div>

        {/* card ---3  */}
        <div className='bg-white w-full h-full px-3 md:px-8 py-3 rounded border-t-8 border-[#4DDFFD] relative '>
          <div
            className='w-full h-16 my-3 '
            style={{
              background: `url('/asset-3.svg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <span className='text-center w-full block text-[#6c757d] font-medium tracking-widest '>
              GOLD
            </span>
            <h3 className='text-center text-[#4F65C2] font-bold text-xl md:text-2xl lg:text-3xl'>
              <sup className='text-sm'>$</sup> 84.99{' '}
              <sub className='text-sm'>/mo</sub>
            </h3>

            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>
                Free Google Voice Remote and DVR Included
              </p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>125+ HD Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>Local Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>240+ Channels</p>
            </div>
            <div className='py-3'>
              <PrimaryButton title='Booking' bgColor='bg_two' />
            </div>
            <p className='text-[#6c757d] font-sans text-sm underline text-center'>
              Or call (+880) 1789141408
            </p>
          </div>
          <p className='absolute mx-auto -top-5 left-0 right-0 w-2/3 bg-[#FA188D] rounded text-center py-1 text-white '>
            Most Popular
          </p>
        </div>

        {/* card ---4  */}
        <div className='bg-white w-full h-full px-3 md:px-8 py-3 rounded border-t-8 border-[#4DDFFD] relative '>
          <div
            className='w-full h-16 my-3 '
            style={{
              background: `url('/asset-4.svg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <span className='text-center w-full block text-[#6c757d] font-medium tracking-widest '>
              DIAMOND
            </span>
            <h3 className='text-center text-[#4F65C2] font-bold text-xl md:text-2xl lg:text-3xl'>
              <sup className='text-sm'>$</sup> 94.99{' '}
              <sub className='text-sm'>/mo</sub>
            </h3>

            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>
                Free Google Voice Remote and DVR Included
              </p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>140+ HD Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>Local Channels</p>
            </div>
            <div className='flex py-1 items-center gap-2 font-sans font-medium text-sm'>
              <span>
                <BsFillPatchCheckFill className='text-[#4DDFFD] text-xl' />
              </span>
              <p className='text-[#6c757d]'>290+ Channels</p>
            </div>
            <div className='py-3'>
              <PrimaryButton title='Booking' bgColor='bg_two' />
            </div>
            <p className='text-[#6c757d] font-sans text-sm underline text-center'>
              Or call (+880) 1789141408
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPackage
