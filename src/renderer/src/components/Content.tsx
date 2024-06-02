import { Blocked, CreateSession, EditSession, Home } from './'

const Content = ({ content }: { content: string }) => {
  return (
    <div className="col-span-10 bg-gradient-to-tr from-[#010311] to-[#1D1C20] rounded-r-md overflow-y-auto">
      {content === '' ? <Home /> : null}
      {content === 'home' ? <Home /> : null}
      {content === 'create' ? <CreateSession /> : null}
      {content === 'blocked' ? <Blocked /> : null}
      {content === 'edit' ? <EditSession /> : null}
    </div>
  )
}

export default Content
