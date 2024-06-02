import { MdAvTimer, MdDragIndicator } from 'react-icons/md'
import { TbLockSquare } from 'react-icons/tb'
import { Button } from './'

const Sidebar = ({
  onSelectSection
}: {
  onSelectSection: (id: 'home' | 'create' | 'blocked') => void
}) => {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#0F0F14] to-[#010310] col-span-1 rounded-l-md">
        <div className="h-12 border-radial-gradient pb-[1px]">
          <div className="h-full w-full bg-gradient-to-bl from-[#0E0E13] to-[#080912]"></div>
        </div>
        <div className="flex flex-col">
          <Button onSelectSection={onSelectSection} id="home">
            <MdDragIndicator />
          </Button>
          <Button onSelectSection={onSelectSection} id="create">
            <MdAvTimer />
          </Button>
          <Button onSelectSection={onSelectSection} id="blocked">
            <TbLockSquare />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
