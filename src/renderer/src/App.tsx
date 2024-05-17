import { useState } from 'react'
import Content from './components/Content'
import Draggable from './components/Draggable'
import Settings from './components/Settings'
import Sidebar from './components/Sidebar'

const App = () => {
  const [content, setContent] = useState<string>('')

  const handleSelectSection = (children: string) => {
    setContent(children)
  }

  const handleSelectSession = (session: string) => {
    setContent(session)
  }

  return (
    <>
      <div className="h-screen grid grid-cols-5 grid-rows-12">
        <Draggable />
        <Sidebar onSelectSection={handleSelectSection} />
        <Content content={content} onSelectSession={handleSelectSession} />
        <Settings />
      </div>
    </>
  )
}
export default App
