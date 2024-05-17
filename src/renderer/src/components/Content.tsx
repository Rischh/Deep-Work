import { RendererProps } from '../models/Props'
import Blocked from './Blocked'
import CreateSession from './CreateSession'
import Home from './Home'
import Session from './Session'

const Content = ({ content, onSelectSession }: RendererProps) => {
  return (
    <div className="col-span-4 row-span-12 bg-slate-900/50 border-l border-l-white/10">
      {content === 'Blocked' ? <Blocked /> : null}
      {content === 'Session' ? <Session onSelectSession={onSelectSession} /> : null}
      {content === 'Home' ? <Home /> : null}
      {content === 'create' ? <CreateSession /> : null}
      {content === '' ? <Home /> : null}
    </div>
  )
}

export default Content
