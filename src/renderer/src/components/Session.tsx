import { SessionProps } from '../models/Props'

const Session = ({ onSelectSession }: SessionProps) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <button
          id="CreateSession"
          onClick={() => onSelectSession('create')}
          className="bg-emerald-800"
        >
          Create
        </button>
        <button onClick={() => onSelectSession('edit')} id="EditSession" className="bg-amber-600">
          Edit
        </button>
      </div>
    </>
  )
}

export default Session
