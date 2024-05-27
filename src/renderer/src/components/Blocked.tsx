import ToggleActive from './button/ToggleActive'
import Form from './Form'

const Blocked = () => {
  const unprodWebsites = [
    'Adult',
    'Social Media',
    'www.instagram.com',
    'www.netflix.com',
    'www.youtube.com',
    'www.tiktok.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.netflix.com',
    'www.youtube.com',
    'www.tiktok.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.netflix.com',
    'www.youtube.com',
    'www.tiktok.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.netflix.com'
  ]

  return (
    <div
      className="flex flex-col items-center mx-9 overflow-y-auto"
      style={{ maxHeight: 'calc(100vh - 1rem)' }}
    >
      <h1 className="text-6xl text-slate-50  font-extrabold tracking-tight mt-10">
        Blocked Websites
      </h1>
      <div className="mt-9">
        <Form></Form>
        {unprodWebsites.map((website) => (
          <ToggleActive key={website} website={website} />
        ))}
      </div>
    </div>
  )
}

export default Blocked
