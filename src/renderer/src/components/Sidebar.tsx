import Button from './button/Button'

const Sidebar = () => {
  const handleSelectedSection = (children: string) => {
    console.log(children)
  }

  return (
    <>
      <div className="mt-7 col-span-1 row-span-11">
        <div className="mt-1 flex flex-col px-8">
          <Button onSelectedSection={handleSelectedSection}>Home</Button>
          <Button onSelectedSection={handleSelectedSection}>Session</Button>
          <Button onSelectedSection={handleSelectedSection}>BlockList</Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
