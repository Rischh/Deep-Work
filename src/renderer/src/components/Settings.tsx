import AppSettings from './AppSettings'
import UserSettings from './avatar/UserSettings'

const Settings = () => {
  return (
    <>
      <div className="bg-slate-900/65 row-span-1">
        <div className="flex justify-between m-5">
          <UserSettings email={'rischebourg.amuel@gmail.com'} image={undefined} />
          <AppSettings></AppSettings>
        </div>
      </div>
    </>
  )
}

export default Settings
