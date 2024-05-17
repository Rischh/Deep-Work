import { initials } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import AvatarImage from '../avatar/AvatarImage'

const ButtonUserSettings = ({ email, image }: { email: string; image?: string }) => {
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
      <button>
        <AvatarImage svg={finalImage} />
      </button>
    </>
  )
}

export default ButtonUserSettings
