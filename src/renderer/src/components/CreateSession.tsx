import { useContext } from 'react'
import { GoPlus } from 'react-icons/go'
import { Navbar, Session } from './'
import ContentContext from './contexts/contentContext'

const CreateSession = () => {
  const { dispatch } = useContext(ContentContext)

  const handleClick = (session: 'create' | 'edit') => {
    dispatch({ type: session })
  }

  return (
    <>
      <div className="h-full flex flex-col">
        <Navbar>
          <button className="mx-10 divide-y-2 divide-y-reverse underline underline-offset-[1rem] decoration-[#591DDD] text-slate-50">
            Create
          </button>
          <button
            onClick={() => {
              handleClick('edit')
            }}
            className="hover:underline underline-offset-[1rem] decoration-[#591DDD] text-slate-400"
          >
            Edit
          </button>
        </Navbar>
        <Session />
        <div className="flex-1 flex justify-center items-center">
          <GoPlus className="text-4xl text-gray-500 hover:text-white"></GoPlus>
        </div>
      </div>
    </>
  )
}

export default CreateSession
