import { useGetBlogsQuery } from '@/redux/feature/blog/blogApiSlice'
import BlogCard from './BlogCard'

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery({})
  // console.log(blogs?.data)

  return (
    <section className='w-full h-full  bg-white py-10 px-5 md:px-10'>
      <article className=''>
        {/* article header  */}
        <div className='py-5'>
          <h2 className='text-center text-[#112164] font-bold text-2xl md:text-3xl lg:text-4xl'>
            Latest News
          </h2>
          <p className='text-center text-[#6c757d] font-sans text-sm py-3'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <br /> alteration in some form by
            injected humour
          </p>
        </div>
        {/* article body  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 md:gap-y-8'>
          {blogs?.data?.map((blog: any) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Blogs
