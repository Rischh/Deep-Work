import { CardProps } from '@renderer/models/Props'

const Card = ({
  span,
  children,
  color = 'bg-transparent',
  hover = 'hover:bg-[#18181e]'
}: CardProps) => {
  return (
    <div className={`rounded-lg ${color} ${hover} border border-[#1d1c1f] ${span} `}>
      {children}
    </div>
  )
}

export default Card
