import { useState } from 'react'
import Content from './components/Content'
import Draggable from './components/Draggable'
import Sidebar from './components/Sidebar'

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
      <div className="h-screen grid grid-cols-11 border-8 border-[#1d1c20]">
        <Draggable />
        <Sidebar onSelectSection={handleSelectSection} />
        <Content content={content} onSelectSession={handleSelectSession} />
      </div>
    </>
  )
}
export default App
