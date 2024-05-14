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

  return (
    <>
      <div className="h-screen grid grid-cols-4 grid-rows-12">
        <Draggable />
        <Sidebar onSelectSection={handleSelectSection} />
        <Content content={content} />
        <Settings />
      </div>
    </>
  )
}
export default App
