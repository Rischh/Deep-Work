import { useState } from 'react'
import Content from './components/Content'
import Draggable from './components/Draggable'
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
      <div className="h-screen grid grid-cols-6 ">
        <Draggable />
        <Sidebar onSelectSection={handleSelectSection} />
        <Content content={content} onSelectSession={handleSelectSession} />
      </div>
    </>
  )
}
export default App
