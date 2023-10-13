import Banner from './Banner/Banner'
import Extra from './ExtraSection/Extra'
import ExtraTwo from './ExtraSection/ExtraTwo'
import Faq from './Faq/Faq'

const Home = () => {
  return (
    <section className='w-full'>
      <Banner />
      <Faq />
      <Extra />
      <ExtraTwo />
    </section>
  )
}

export default Home
