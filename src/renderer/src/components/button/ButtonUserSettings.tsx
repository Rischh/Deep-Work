import { initials } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { BtnUserSettingsProps } from '@renderer/models/Props'
import AvatarImage from '../avatar/AvatarImage'

const ButtonUserSettings = ({ email, image, onSelectUserSettings }: BtnUserSettingsProps) => {
  const avatar = createAvatar(initials, {
    seed: `${email}`,
    radius: 20,
    size: 32,
    backgroundType: ['gradientLinear']
  })
  const svg = avatar.toString()

  const finalImage = image ?? svg

  return (
    <>
      <button onClick={() => onSelectUserSettings('user')}>
        <AvatarImage svg={finalImage} />
      </button>
    </>
  )
}

export default ButtonUserSettings
