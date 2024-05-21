import { RendererProps } from '../models/Props'
import AppSettings from './AppSettings'
import Blocked from './Blocked'
import CreateSession from './CreateSession'
import EditSession from './EditSession'
import Home from './Home'
import Session from './Session'
import Templates from './Templates'
import UserSettings from './UserSettings'

const Content = ({ content, onSelectSession }: RendererProps) => {
  return (
    <div className="col-span-4 row-span-12 my-3 mx-3 rounded bg-slate-900/50  ">
      {content === 'Blocked' ? <Blocked /> : null}
      {content === 'Session' ? <Session onSelectSession={onSelectSession} /> : null}
      {content === 'Home' ? <Home /> : null}
      {content === 'create' ? <CreateSession /> : null}
      {content === '' ? <Home /> : null}
      {content === 'edit' ? <EditSession /> : null}
      {content === 'templates' ? <Templates /> : null}
      {content === 'user' ? <UserSettings /> : null}
      {content === 'app' ? <AppSettings /> : null}
    </div>
  )
}

export default Content
