import { useState } from 'react'
import { Content, Draggable, Sidebar } from './components'

const App = () => {
  const [content, setContent] = useState<string>('')

  console.log(content)

  const handleSelectSection = (children: string) => {
    setContent(children)
  }

  const handleSelectSession = (session: string) => {
    setContent(session)
  }

  return (
    <>
      <div className="h-screen grid grid-cols-11 border-[7px] border-[#1d1c20]">
        <Draggable />
        <Sidebar onSelectSection={handleSelectSection} />
        <Content content={content} onSelectSession={handleSelectSession} />
      </div>
    </>
  )
}

export default App
