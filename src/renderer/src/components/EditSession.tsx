import { useContext } from 'react'
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
      <div className="flex h-full flex-col">
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
        <div className="flex-1 p-10">
          <div className="flex h-full">
            <div className="h-full w-1/4 flex-col mt-2">
              <EditCard></EditCard>
              <EditCard></EditCard>
              <EditCard></EditCard>
              <EditCard></EditCard>
              <EditCard></EditCard>
            </div>
            <div className="h-full w-3/4">
              <div className="h-full rounded-lg border border-[#1d1c1f]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditSession
