import { SessionProps } from '../models/Props'
import { Card, Navbar, NodeTemplate } from './'

const CreateSession = ({ onSelectSession }: SessionProps) => {
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
        <div className="h-full grid grid-cols-3 grid-rows-3 gap-2 p-10">
          <Card span="row-span-2" color="bg-[#591DDD]" hover="hover:bg-[#6837d2] ">
            <div className="h-full flex flex-col justify-end items-center p-2">
              <div className="text-lg font-bold">Create your Session</div>
              <div className="text-sm">Adapt them to your Agenda</div>
            </div>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate></NodeTemplate>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CreateSession
