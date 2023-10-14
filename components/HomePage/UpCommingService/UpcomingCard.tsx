interface UpcomingType {
  title: string
  description: string
  img: string
}

const UpcomingCard = ({ title, description, img }: UpcomingType) => {
  return (
    <div className='flex gap-3 w-full h-full rounded p-3 bg-white hover:transform hover:-translate-y-2 transition-all duration-100'>
      <div
        className='w-full h-full'
        style={{
          background: `url(${img})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          width: '100px',
        }}
      ></div>
      <div className=''>
        <h4 className='font-bold text-[#112164] text-xl'>{title}</h4>
        <hr className='w-16 bg-[#6c757d] h-1' />
        <p className='text-[#6c757d] font-sans text-sm py-2'>{description}</p>
      </div>
    </div>
  )
}

export default UpcomingCard
