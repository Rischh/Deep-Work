import ButtonAppSettings from './button/ButtonAppSettings'
import ButtonUserSettings from './button/ButtonUserSettings'

const Settings = () => {
  return (
    <>
      <div className="bg-slate-900/25 row-span-1 violet">
        <div className="flex justify-between m-5">
          <ButtonUserSettings email={'rischebourg.amuel@gmail.com'} image={undefined} />
          <ButtonAppSettings></ButtonAppSettings>
        </div>
      </div>
    </>
  )
}

export default Settings
