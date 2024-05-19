import { AppSettingsProps } from '@renderer/models/Props'
import { VscGear } from 'react-icons/vsc'

const ButtonAppSettings = ({ onSelectAppSettings }: AppSettingsProps) => {
  return (
    <button onClick={() => onSelectAppSettings('app')}>
      <VscGear color="grey" size={32} className="" />
    </button>
  )
}

export default ButtonAppSettings
