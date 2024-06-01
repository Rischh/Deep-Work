import { Form, Navbar, ToggleActive } from './'

const Blocked = () => {
  const unprodWebsites = [
    'All',
    'Adult',
    'Social Media',
    'Messaging',
    'Gambling',
    'Shopping',
    'News'
  ]

  return (
    <>
      <Navbar>
        <button className="mx-10 divide-y-2 divide-y-reverse underline underline-offset-[1rem] decoration-[#591DDD] ">
          Websites
        </button>
      </Navbar>
      <div className="flex flex-col items-center mx-9 overflow-y-auto">
        <div className="mt-9">
          <Form></Form>
          <div className="mt-12">
            {unprodWebsites.map((website) => (
              <ToggleActive key={website} website={website} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blocked
