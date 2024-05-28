import { RendererProps } from '../models/Props'
import Blocked from './Blocked'
import CreateSession from './CreateSession'
import EditSession from './EditSession'
import Home from './Home'
import Session from './Session'
import Templates from './Templates'
import UserSettings from './UserSettings'

const Content = ({ content, onSelectSession }: RendererProps) => {
  return (
    <div
      className="col-span-10 bg-gradient-to-tr from-[#010311] to-[#1D1C20] rounded-r-md overflow-y-hidden"
      style={{ maxHeight: '100vh' }}
    >
      {content === 'blocked' ? <Blocked /> : null}
      {content === 'session' ? <Session onSelectSession={onSelectSession} /> : null}
      {content === 'home' ? <Home /> : null}
      {content === 'settings' ? <UserSettings /> : null}
      {content === 'create' ? <CreateSession /> : null}
      {content === '' ? <Home /> : null}
      {content === 'edit' ? <EditSession /> : null}
      {content === 'templates' ? <Templates /> : null}
      {content === 'user' ? <UserSettings /> : null}
    </div>
  )
}

export default Content
