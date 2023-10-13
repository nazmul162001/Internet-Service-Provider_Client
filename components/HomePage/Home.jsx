import Banner from './Banner/Banner'
import Extra from './ExtraSection/Extra'
import ExtraTwo from './ExtraSection/ExtraTwo'
import Faq from './Faq/Faq'
import FindArea from './FindArea/FindArea'
import OurPackage from './OurPackage/OurPackage'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <section className='w-full'>
      <Banner />
      <Faq />
      <Extra />
      <ExtraTwo />
      <WhatWeDo />
      <WhyChooseUs />
      <FindArea />
      <OurPackage />
    </section>
  )
}

export default Home
