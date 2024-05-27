import { SessionProps } from '../models/Props'

const Session = ({ onSelectSession }: SessionProps) => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <>
      <div className="flex flex-col">
        <button onClick={() => onSelectSession('create')} className="bg-emerald-800">
          Create
        </button>
        <button onClick={() => onSelectSession('edit')} id="EditSession" className="bg-amber-600">
          Edit
        </button>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  )
}

export default Session
