import CreateSession from './CreateSession'
import EditSession from './EditSession'
import TemplateSession from './TemplateSession'

const Session = () => {
  return (
    <>
      <div className="h-screen overflow-x-hidden ">
        <CreateSession></CreateSession>
        <EditSession></EditSession>
        <TemplateSession></TemplateSession>
      </div>
    </>
  )
}

export default Session
