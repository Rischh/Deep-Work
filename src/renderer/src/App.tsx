import Content from './components/Content'
import Draggable from './components/Draggable'
import Settings from './components/Settings'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-4 grid-rows-12">
        <Draggable></Draggable>
        <Sidebar />
        <Content props={null} />
        <Settings></Settings>
      </div>
    </>
  )
}
export default App
