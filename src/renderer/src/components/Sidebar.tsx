import { MdAvTimer, MdDragIndicator } from 'react-icons/md'
import { TbLockSquare, TbSettings } from 'react-icons/tb'
import { SectionProps } from '../models/Props'
import Button from './button/Button'

const Sidebar = ({ onSelectSection }: SectionProps) => {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#0F0F14] to-[#010310] col-span-1 rounded-l-md">
        <div>
          <div className="h-12 border-radial-gradient pb-[1px]">
            <div className="h-full w-full bg-gradient-to-bl from-[#0E0E13] to-[#080912]"></div>
          </div>
          <div className="flex flex-col">
            <Button onSelectSection={onSelectSection} id={'home'}>
              <MdDragIndicator />
            </Button>
            <Button onSelectSection={onSelectSection} id={'session'}>
              <MdAvTimer />
            </Button>
            <Button onSelectSection={onSelectSection} id={'blocked'}>
              <TbLockSquare />
            </Button>
            <Button onSelectSection={onSelectSection} id={'settings'}>
              <TbSettings />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
