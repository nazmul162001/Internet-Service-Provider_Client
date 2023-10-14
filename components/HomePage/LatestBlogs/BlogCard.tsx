import { Avatar } from '@material-tailwind/react'
import { IoIosArrowForward } from 'react-icons/io'

interface blogType {
  img: string
}

const BlogCard = ({ img }: blogType) => {
  return (
    <div className='w-full h-full'>
      <div
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className='w-full h-48'
      ></div>
      <div className='cursor-pointer'>
        <div className='flex justify-between py-3'>
          <div className='flex items-center gap-2'>
            <Avatar
              src='http://themelooks.net/demo/serviney/html/preview/img/authors/author1.jpg'
              alt='avatar'
              size='xs'
              className='rounded-full w-8'
            />
            <p className='text-[#6c757d] text-sm font-sans'>By John Doe</p>
          </div>
          <div>
            <p className='text-[#6c757d] text-sm font-sans'>January 18, 2023</p>
          </div>
        </div>
        {/* blog title  */}
        <div>
          <h4 className='font-sans  font-medium text-lg text-[#6c757d] hover:text-[#6361d8] transition-all duration-200'>
            Why the FCCs latest net neutrality defense is hollow on the flow
          </h4>
          <p className='py-8 text-[#6c757d] uppercase flex items-center gap-2'>
            continue reading...{' '}
            <span>
              {' '}
              <IoIosArrowForward className='text-xl' />{' '}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
