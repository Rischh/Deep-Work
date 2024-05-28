import ToggleActive from './button/ToggleActive'
import Form from './Form'

const Blocked = () => {
  const unprodWebsites = [
    'All',
    'Adult',
    'Social Media',
    'Messaging',
    'Gambling',
    'Shopping',
    'News',
    'Streaming Services'
  ]

  return (
    <>
      <div className="bg-gradient-to-tr from-[#020414] to-[#1C1B1F] h-12 w-full flex rounded-tr-md border-b border-[#1C1B1F]">
        <button className="mx-10 divide-y-2 divide-y-reverse hover:underline underline-offset-[1rem] decoration-[#591DDD] ">
          Websites
        </button>
        <button className="hover:underline underline-offset-[1rem] decoration-[#591DDD] ">
          Apps
        </button>
      </div>
      <div className="flex flex-col items-center mx-9 overflow-y-auto">
        <h1 className="text-3xl text-slate-50  font-extrabold tracking-tight mt-10">
          Blocked Websites
        </h1>
        <div className="mt-9">
          <Form></Form>
          {unprodWebsites.map((website) => (
            <ToggleActive key={website} website={website} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blocked
