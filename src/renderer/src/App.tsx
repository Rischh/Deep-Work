import { useReducer } from 'react'
import { Content, Draggable, Sidebar } from './components'
import ContentContex from './components/contexts/contentContext'
import contentReducer from './components/reducers/contentReducer'

const App = () => {
  const [content, dispatch] = useReducer(contentReducer, '')

  return (
    <ContentContex.Provider value={{ content, dispatch }}>
      <div className="h-screen grid grid-cols-11 border-[7px] border-[#1d1c20]">
        <Draggable />
        <Sidebar />
        <Content content={content} />
      </div>
    </ContentContex.Provider>
  )
}

export default App
