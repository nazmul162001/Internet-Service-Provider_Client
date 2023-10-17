import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import SearchBox from './SearchBox'

const Search = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex items-center'>
      <button
        onClick={() => setOpen(!open)}
        className='flex items-center text-[#8b827d] hover:text-black'
      >
        <li>
          <FiSearch className='text-2xl' />{' '}
        </li>
      </button>
      <SearchBox open={open} setOpen={setOpen} />
    </div>
  )
}

export default Search
