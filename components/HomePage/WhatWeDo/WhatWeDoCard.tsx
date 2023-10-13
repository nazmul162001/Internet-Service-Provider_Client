interface cardType {
  title: string
  description: string
  path: string
}

const WhatWeDoCard = ({ title, description, path }: cardType) => {
  return (
    <div className='relative w-full h-72 overflow-hidden card_main rounded'>
      <div className='py-5 px-8 w-full h-full bg-white card_body rounded'>
        <span className='whiteOnHover block py-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 480 480'
            width='50'
            height='50'
            fill='#0d99e5'
          >
            <path d={path}></path>
          </svg>
        </span>
        <h3 className='text-[#112164] whiteOnHover text-xl md:text-2xl'>
          {title}
        </h3>
        <p className='py-2 text-[#6c757d] font-normal font-sans text-sm whiteOnHover'>
          {description}
        </p>
      </div>
      {/* circle  */}
      <div className='custom_circle bg-[#0D99E5] absolute -top-32 right-32 w-36 h-28'></div>
    </div>
  )
}

export default WhatWeDoCard
