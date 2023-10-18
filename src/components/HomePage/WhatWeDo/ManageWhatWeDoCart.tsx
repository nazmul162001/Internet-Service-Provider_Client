import { useRouter } from 'next/router'
import { BiTrash } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'

interface cardType {
  title: string
  description: string
  path: string
  bg: string
}

const ManageWhatWeDoCart = ({ title, description, path, bg }: cardType) => {
  const router = useRouter()
  // handle add to cart
  const handleAddToCart = () => {
    alert('add to cart')
  }

  return (
    <div className='relative w-full h-60 overflow-hidden card_main rounded cursor-pointer'>
      <div
        onClick={() => router.push('/service/154')}
        className={`py-5 px-8 w-full h-full bg-[${bg}] border-2 card_body rounded`}
      >
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
        {/* circle  */}
        <div className='custom_circle bg-[#0D99E5] absolute -top-32 right-32 w-36 h-28'></div>
        <div className='w-3/5 h-10 absolute bottom-3 left-1/2  transform -translate-x-1/2'>
          <div className='w-full h-full relative'>
            <div className='w-full h-full flex justify-evenly items-center gap-3 cart_icon bg-[#0d99e542]'>
              <BiTrash className='text-xl md:text-3xl lg:text-4xl text-white hover:text-red-500' />
              <BsPencil
                onClick={handleAddToCart}
                className='text-xl md:text-3xl lg:text-4xl text-white hover:text-green-500'
              />
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0000004f]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageWhatWeDoCart