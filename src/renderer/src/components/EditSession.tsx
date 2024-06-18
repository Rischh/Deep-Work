import { useContext } from 'react'
import { Navbar } from './'
import ContentContext from './contexts/contentContext'

const EditSession = () => {
  const { dispatch } = useContext(ContentContext)

  const handleClick = (session: 'create') => {
    dispatch({ type: session })
  }

  return (
    <div className="flex-none">
      <Navbar>
        <button
          className="mx-10 hover:underline underline-offset-[1rem] decoration-[#591DDD] text-slate-400"
          onClick={() => handleClick('create')}
        >
          Create
        </button>
        <button className="divide-y-2 divide-y-reverse underline decoration-[#591DDD] underline-offset-[1rem] text-slate-50">
          Edit
        </button>
      </Navbar>
    </div>
  )
}

export default EditSession
