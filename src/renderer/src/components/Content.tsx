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
    <div className="col-span-5 my-2 mr-2 rounded-lg bg-slate-900/50  ">
      {content === 'Blocked' ? <Blocked /> : null}
      {content === 'Session' ? <Session onSelectSession={onSelectSession} /> : null}
      {content === 'Home' ? <Home /> : null}
      {content === 'Settings' ? <Home /> : null}
      {content === 'create' ? <CreateSession /> : null}
      {content === '' ? <Home /> : null}
      {content === 'edit' ? <EditSession /> : null}
      {content === 'templates' ? <Templates /> : null}
      {content === 'user' ? <UserSettings /> : null}
    </div>
  )
}

export default Content
