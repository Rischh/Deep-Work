import { useReducer } from 'react'
import { Content, Draggable, Sidebar } from './components'
import contentReducer from './components/reducers/contentReducer'

const App = () => {
  const [value, dispatch] = useReducer(contentReducer, '')

  const handleSelectSection = (id: 'home' | 'create' | 'blocked') => {
    dispatch({ type: id })
  }

  const handleSelectSession = (session: 'create' | 'edit') => {
    dispatch({ type: session })
  }

  return (
    <>
      <div className="h-screen grid grid-cols-11 border-[7px] border-[#1d1c20]">
        <Draggable />
        <Sidebar onSelectSection={handleSelectSection} />
        <Content value={value} onSelectSession={handleSelectSession} />
      </div>
    </>
  )
}

export default App
