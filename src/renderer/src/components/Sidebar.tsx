import { MdAvTimer, MdDragIndicator } from 'react-icons/md'
import { Button } from './'

const Sidebar = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#0F0F14] to-[#010310] col-span-1 rounded-l-md">
        <div className="h-12 border-radial-gradient pb-[1px]">
          <div className="h-full w-full bg-gradient-to-bl from-[#0E0E13] to-[#080912]"></div>
        </div>
        <div className="flex flex-col items-center">
          <Button id="home">
            <MdDragIndicator />
          </Button>
          <Button id="create">
            <MdAvTimer />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
