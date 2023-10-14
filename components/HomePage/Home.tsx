import Banner from './Banner/Banner'
import Extra from './ExtraSection/Extra'
import ExtraTwo from './ExtraSection/ExtraTwo'
import Faq from './Faq/Faq'
import FindArea from './FindArea/FindArea'
import GetStart from './GetStart/GetStart'
import Blogs from './LatestBlogs/Blogs'
import OurPackage from './OurPackage/OurPackage'
import TestiMonial from './Testmonial/TestMonial'
import UpComing from './UpCommingService/UpComing'
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
      <UpComing />
      <WhyChooseUs />
      <FindArea />
      <OurPackage />
      <TestiMonial />
      <Blogs />
      <GetStart />
    </section>
  )
}

export default Home
