import WhatWeDoCard from './WhatWeDoCard'

const WhatWeDo = () => {
  return (
    <section className='my-16 px-5 md:px-10'>
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
        <WhatWeDoCard />
      </div>
    </section>
  )
}

export default WhatWeDo
