import Blocked from './Blocked'
import Home from './Home'
import Session from './Session'

type ContentProps = {
  content: string
}

const Content = ({ content }: ContentProps) => {
  if (content === 'Home') {
    return (
      <div className="col-span-3 row-span-12 bg-slate-900/65 border-l border-l-white/10">
        <div className="h-screen flex justify-center items-center font-semibold text-2xl text-gray-500">
          <Home />
        </div>
      </div>
    )
  } else if (content === 'Session') {
    return (
      <div className="col-span-3 row-span-12 bg-slate-900/65 border-l border-l-white/10">
        <Session />
      </div>
    )
  } else if (content === 'Blocked') {
    return (
      <div className="col-span-3 row-span-12 bg-slate-900/65 border-l border-l-white/10">
        <div className="h-screen w-full flex justify-center font-semibold text-2xl text-gray-500">
          <Blocked />
        </div>
      </div>
    )
  } else {
    return (
      <div className="col-span-3 row-span-12 bg-slate-900/65 border-l border-l-white/10">
        <div className="h-screen flex justify-center items-center font-semibold text-2xl text-gray-500">
          Select a section to display the content
        </div>
      </div>
    )
  }
}

export default Content
