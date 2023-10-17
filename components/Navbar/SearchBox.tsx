import React from 'react'
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from '@material-tailwind/react'

const SearchBox = ({ isOpen, onClose }: any) => {
  const [size, setSize] = React.useState(null)

  const handleOpen = (value: any) => setSize(value)
  return (
    <Dialog
      className='w-full h-screen flex justify-center items-center'
      open={isOpen}
      size='xxl'
      handler={onClose}
    >
      <div onClick={onClose}>close</div>
    </Dialog>
  )
}

export default SearchBox
