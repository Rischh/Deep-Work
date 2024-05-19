import { SessionProps } from '../models/Props'

const Session = ({ onSelectSession }: SessionProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-8 gap-x-8 mx-6 my-6 ">
        <button
          id="CreateSession"
          onClick={() => onSelectSession('create')}
          className="bg-slate-600 rounded-lg min-h-40 col-span-full mx-2 "
        >
          Create
        </button>
        <button
          onClick={() => onSelectSession('edit')}
          id="EditSession"
          className="bg-slate-500 rounded-lg min-h-48 "
        >
          Edit
        </button>
        <button
          onClick={() => onSelectSession('templates')}
          id="Templates"
          className="bg-slate-400 rounded-lg "
        >
          Templates
        </button>
        <button
          onClick={() => onSelectSession('quick')}
          id="Quick Focus"
          className="bg-slate-300 rounded-lg  col-span-full min-h-40 mx-5"
        >
          Quick Focus
        </button>
      </div>
    </>
  )
}

export default Session
