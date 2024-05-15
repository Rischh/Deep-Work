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
    <div className="flex flex-col mt-8">
      <Form></Form>
      {unprodWebsites.map((website) => (
        <ToggleActive key={website} website={website} />
      ))}
    </div>
  )
}

export default Blocked
