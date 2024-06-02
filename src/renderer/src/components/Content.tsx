import { ContentProps } from '../models/Props'
import { Blocked, CreateSession, EditSession, Home } from './'

const Content = ({ value, onSelectSession }: ContentProps) => {
  return (
    <div className="col-span-10 bg-gradient-to-tr from-[#010311] to-[#1D1C20] rounded-r-md overflow-y-auto">
      {value === '' ? <Home /> : null}
      {value === 'home' ? <Home /> : null}
      {value === 'create' ? <CreateSession onSelectSession={onSelectSession} /> : null}
      {value === 'blocked' ? <Blocked /> : null}
      {value === 'edit' ? <EditSession /> : null}
    </div>
  )
}

export default Content
