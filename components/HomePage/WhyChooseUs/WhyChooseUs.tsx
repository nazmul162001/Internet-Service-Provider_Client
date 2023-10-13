import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className='w-full h-full bg-white my-10 px-5 md:px-10'>
      <div className='grid grid-cols-12 py-10 w-full h-full'>
        <div className='grid col-span-12 md:col-span-8 px-2 md:px-10 w-full h-full'>
          <span className='text-[#0d99e5]'>Why choose us</span>
          <h1 className='text-[#112164] text-2xl md:text-3xl lg:text-4xl font-bold'>
            All your favorite TV for a better value and no hidden fees.
          </h1>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 py-5'>
            <div className='w-full h-full'>
              <p className='py-2 text-[#6c757d] px-2 font-normal font-sans text-sm pb-5'>
                Streaming TV gives you instant access to all your favorite Live
                channels and OnDemand video at a low price. Best of all, there
                are no hidden fees, equipment rentals or contracts. Stream all
                of your favorite shows, surf the web.
              </p>
              <div
                className='w-full h-72'
                style={{
                  background: `url('/tvshow2.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
            <div className='w-full h-full'>
              <p className='py-2 text-[#6c757d] px-2 font-normal font-sans text-sm pb-5'>
                We’ve streamlined our plans to give you the fastest internet
                available at your address for one low monthly price. TV you
                want, when you want it. Enjoy your favorite shows and movies on
                your own schedule.
              </p>
              <div
                className='w-full h-72'
                style={{
                  background: `url('/tvshow.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='grid col-span-12 md:col-span-4'>
            
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
