import { useGetFaqQuery } from '../../../redux/feature/faq/faqApiSlice'
import React from 'react'

const Accordion = () => {
  const { data: faqs } = useGetFaqQuery({})
  // console.log(faqs?.data)

  return (
    <div id='wrapper' className='custom_accordion'>
      <ul>
        {faqs?.data?.map((faq: any) => (
          <li>
            <input type='checkbox' defaultChecked />
            <i></i>
            <h2>{faq?.title}</h2>
            <p>{faq?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accordion
