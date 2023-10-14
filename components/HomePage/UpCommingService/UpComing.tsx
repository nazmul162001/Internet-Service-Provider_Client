import UpcomingCard from './UpcomingCard'

const UpComing = () => {
  return (
    <section className='w-full h-screen'>
      <div className='text-center'>
        <h2 className='text-[#112164] text-2xl md:text-3xl lg:text-4xl font-bold'>
          Our Upcoming Service
        </h2>
        <p className='text-[#6c757d] py-5 font-sans'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered <br /> alteration in some form, by injected
          humour.
        </p>
      </div>
      <div className='w-full h-full md:h-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 my-10 gap-3'>
        <UpcomingCard
          title='Own FTP Server'
          description='At vero eos et accusamus et iusto dignissimosus qui blanditiis
          praesentium uptatum'
          img='upcoming1.png'
        />
        <UpcomingCard
          title='Upgrade or Downgrade'
          description='At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum'
          img='upcoming2.png'
        />
        <UpcomingCard
          title='No Hard Data Limit'
          description='At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum'
          img='upcoming3.png'
        />
        <UpcomingCard
          title='Lock in Low Rates'
          description='At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum'
          img='upcoming4.png'
        />
        <UpcomingCard
          title='No Video Streaming'
          description='At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum'
          img='upcoming5.png'
        />
        <UpcomingCard
          title='Access to All Website'
          description='At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum'
          img='upcoming6.png'
        />
      </div>
    </section>
  )
}

export default UpComing
