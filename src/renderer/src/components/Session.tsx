import { SessionProps } from '../models/Props'
import { Card, Navbar } from './'

const Session = ({ onSelectSession }: SessionProps) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar>
          <button
            onClick={() => onSelectSession('create')}
            className="mx-10 divide-y-2 divide-y-reverse underline underline-offset-[1rem] decoration-[#591DDD] "
          >
            Create
          </button>
          <button
            onClick={() => onSelectSession('edit')}
            className="hover:underline underline-offset-[1rem] decoration-[#591DDD] "
          >
            Edit
          </button>
        </Navbar>
        <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-2 p-10">
          <Card span={'row-span-3'}>
            <div>Create your own Session</div>
          </Card>
          <Card>Templates</Card>
          <Card>Templates</Card>
          <Card>Templates</Card>
          <Card>Templates</Card>
          <Card>Templates</Card>
          <Card>Templates</Card>
        </div>
      </div>
    </>
  )
}

export default Session
