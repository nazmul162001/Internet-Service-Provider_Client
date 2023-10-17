import Home from '@/components/HomePage/Home'
import RootLayout from '@/components/Layouts/RootLayouts'
import { ReactElement } from 'react'

const HomePage = () => {
  return (
    <section>
      <Home />
    </section>
  )
}

export default HomePage

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}
