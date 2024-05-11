import Button from './button/Button'

const Sidebar = () => {
  return (
    <>
      <div className="mt-7 col-span-1 row-span-11">
        <div className="mt-1 flex flex-col px-8">
          <Button section={'Home'}></Button>
          <Button section={'Session'}></Button>
          <Button section={'BlockList'}></Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
