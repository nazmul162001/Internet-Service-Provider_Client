import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import SearchBox from './SearchBox'

const Search = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const openDialog = () => {
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  return (
    <div className='flex items-center'>
      <button
        onClick={openDialog}
        className='flex items-center text-[#8b827d] hover:text-black'
      >
        <li>
          <FiSearch className='text-2xl' />{' '}
        </li>
      </button>
      <SearchBox isDialogOpen={isDialogOpen}  setDialogOpen={setDialogOpen}/>
    </div>
  )
}

export default Search
