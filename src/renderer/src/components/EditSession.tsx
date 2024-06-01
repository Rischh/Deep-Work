import { IoChevronBackOutline } from 'react-icons/io5'
import { Navbar } from './'

const EditSession = () => {
  const handleClick = () => {}

  return (
    <>
      <Navbar>
        <button onClick={handleClick} className="mx-5">
          <IoChevronBackOutline></IoChevronBackOutline>
        </button>
      </Navbar>
    </>
  )
}

export default EditSession
