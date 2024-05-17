import { SectionProps } from '../models/Props'
import Button from './button/Button'

const Sidebar = ({ onSelectSection }: SectionProps) => {
  return (
    <>
      <div className="mt-7 col-span-1 row-span-11">
        <div className="mt-1 flex flex-col px-8">
          <Button onSelectSection={onSelectSection}>Home</Button>
          <Button onSelectSection={onSelectSection}>Session</Button>
          <Button onSelectSection={onSelectSection}>Blocked</Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
