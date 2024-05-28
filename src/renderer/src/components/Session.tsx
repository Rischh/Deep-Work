import { SessionProps } from '../models/Props'

const Session = ({ onSelectSession }: SessionProps) => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#020414] to-[#1C1B1F] h-12 w-full flex rounded-tr-md border-b border-[#1C1B1F]">
        <button
          onClick={() => onSelectSession('create')}
          className="mx-10 divide-y-2 divide-y-reverse hover:underline underline-offset-[1rem] decoration-[#591DDD] "
        >
          Create
        </button>
        <button
          onClick={() => onSelectSession('edit')}
          className="hover:underline underline-offset-[1rem] decoration-[#591DDD] "
        >
          Edit
        </button>
      </div>
    </>
  )
}

export default Session
