import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

const plusIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className='w-4 h-4'
  >
    <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path>
  </svg>
)

const minusIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className='w-4 h-4'
  >
    <path d='M5 11V13H19V11H5Z'></path>
  </svg>
)

interface IconProps {
  id: number
  open: number
}

function Icon({ id, open }: IconProps) {
  return id === open ? minusIcon : plusIcon
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader
          className='accordion-hover mb-2 text-[#112164] font-medium p-2 bg-white hover:text-white transition-all duration-500 hover:bg-[#1f3bb1] flex justify-between items-center'
          onClick={() => handleOpen(1)}
        >
          <span>Why NetFx home internet service?</span>
          <span className='ms-auto'>{Icon({ id: 1, open })}</span>
        </AccordionHeader>
        <AccordionBody>
          There are plenty of reasons to choose NetFx as your ISP (internet
          service provider.) NetFx Internet is #1 in customer satisfaction over
          other major cable Internet providers1. With NetFx, you’ll also enjoy
          99% reliability and experience.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          className='mb-2 text-[#112164] font-medium p-2 bg-white hover:text-white transition-all duration-500 hover:bg-[#1f3bb1] flex justify-between items-center'
          onClick={() => handleOpen(2)}
        >
          <span>Which NetFx Internet plan is the fastest?</span>
          <span className='ms-auto'>{Icon({ id: 2, open })}</span>
        </AccordionHeader>
        <AccordionBody>
          Were not always in the position that we want to be at. Wee constantly
          growing. Were constantly making mistakes. constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          className='mb-2 text-[#112164] font-medium p-2 bg-white hover:text-white transition-all duration-500 hover:bg-[#1f3bb1] flex justify-between items-center'
          onClick={() => handleOpen(3)}
        >
          <span>What WiFi services are available?</span>
          <span className='ms-auto'>{Icon({ id: 3, open })}</span>
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are
          constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader
          className='mb-2 text-[#112164] font-medium p-2 bg-white hover:text-white transition-all duration-500 hover:bg-[#1f3bb1] flex justify-between items-center'
          onClick={() => handleOpen(4)}
        >
          <span>What channels do you get with NetFx+ TV packages?</span>
          <span className='ms-auto'>{Icon({ id: 4, open })}</span>
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are
          constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  )
}
