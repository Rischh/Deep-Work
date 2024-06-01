import { RendererProps } from '../models/Props'
import Blocked from './Blocked'
import EditSession from './EditSession'
import Home from './Home'
import Session from './Session'

const Content = ({ content, onSelectSession }: RendererProps) => {
  return (
    <div className="col-span-10 bg-gradient-to-tr from-[#010311] to-[#1D1C20] rounded-r-md overflow-y-auto">
      {content === '' ? <Home /> : null}
      {content === 'home' ? <Home /> : null}
      {content === 'session' ? <Session onSelectSession={onSelectSession} /> : null}
      {content === 'blocked' ? <Blocked /> : null}
      {content === 'edit' ? <EditSession /> : null}
    </div>
  )
}

export default Content
