import { useContext } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Navbar } from './'
import EditCard from './card/EditCard'
import ContentContext from './contexts/contentContext'

const EditSession = () => {
  const { dispatch } = useContext(ContentContext)

  const handleClick = (session: 'create') => {
    dispatch({ type: session })
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar>
          <button onClick={() => handleClick('create')} className="mx-5">
            <IoChevronBackOutline className="hover:text-slate-400"></IoChevronBackOutline>
          </button>
        </Navbar>
        <div className="bg-[#18181F] h-full rounded-lg">
          <EditCard></EditCard>
          <EditCard></EditCard>
          <EditCard></EditCard>
          <EditCard></EditCard>
          <EditCard></EditCard>
        </div>
      </div>
    </>
  )
}

export default EditSession
