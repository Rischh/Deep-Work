import { SelectSettings } from '@renderer/models/Props'
import ButtonAppSettings from './button/ButtonAppSettings'
import ButtonUserSettings from './button/ButtonUserSettings'

const Settings = ({ onSelectUserSettings, onSelectAppSettings }: SelectSettings) => {
  return (
    <>
      <div className=" row-span-1 ">
        <div className="flex justify-between m-5">
          <ButtonUserSettings
            email={'rischebourg.amuel@gmail.com'}
            image={undefined}
            onSelectUserSettings={onSelectUserSettings}
          />
          <ButtonAppSettings onSelectAppSettings={onSelectAppSettings}></ButtonAppSettings>
        </div>
      </div>
    </>
  )
}

export default Settings
