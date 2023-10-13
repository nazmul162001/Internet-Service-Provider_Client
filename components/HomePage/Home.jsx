import Banner from './Banner/Banner'
import Extra from './ExtraSection/Extra'
import Faq from './Faq/Faq'

const Home = () => {
  return (
    <section className='w-full'>
      <Banner />
      <Faq />
      <Extra />
    </section>
  )
}

export default Home
