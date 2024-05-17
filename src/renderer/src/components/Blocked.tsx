import ToggleActive from './button/ToggleActive'
import Form from './Form'

const Blocked = () => {
  const unprodWebsites = [
    'www.tiktok.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.netflix.com',
    'www.youtube.com'
  ]

  return (
    <div className="flex flex-col items-center mt-8 mx-9">
      <Form></Form>
      <h1 className="text-2xl font-semibold mt-9">Blocked Websites</h1>
      <div className="mt-9">
        {unprodWebsites.map((website) => (
          <ToggleActive key={website} website={website} />
        ))}
      </div>
    </div>
  )
}

export default Blocked
