import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full h-screen fixed top-0 bg-white  left-0 flex justify-center items-center'>
      <div>
        <h1 className='text-4xl font-bold text-center'>404...</h1>
        <button
          onClick={() => router.push('/')}
          className='my-5 px-5 py-1 flex gap-2 border-opacity-20 justify-center items-center bg-transparent border-2 border-[#112164] font-bold text-lg '
        >
          <BsArrowLeft /> <span>Back to Home</span>
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
