import React from 'react'
import { BsPencil } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'

const accordionData = [
  {
    id: 1,
    title: 'What is Lorem Ipsum ?',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: 'Why do we use it ?',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
]

const ManageAccordion = () => {
  const handleAccordionClick = (accordionId: any) => {
    alert(`Accordion ID: ${accordionId}`)
  }

  return (
    <div id='wrapper' className='custom_accordion'>
      <ul>
        {accordionData.map((accordion) => (
          <li key={accordion.id} className='relative'>
            <input type='checkbox' defaultChecked />
            <i></i>
            <h2>
              {accordion.title}
              <span className='flex items-center gap-2 absolute top-8 right-16 z-50'>
                <BsPencil
                  onClick={() => handleAccordionClick(accordion.id)}
                  className='hover:text-green-500 '
                />
                <BiTrash className='hover:text-red-500 ' />
              </span>
            </h2>
            <p>{accordion.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ManageAccordion
