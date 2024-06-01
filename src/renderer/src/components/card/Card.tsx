import { CardProps } from '@renderer/models/Props'

const Card = ({ span, children }: CardProps) => {
  return (
    <div className={`rounded-lg bg-transparent border border-[#1d1c1f] hover:bg-[#18181e] ${span}`}>
      {children}
    </div>
  )
}

export default Card
