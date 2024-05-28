import { SectionProps } from '../../models/Props'

const Button = ({ children, onSelectSection, id }: SectionProps) => {
  return (
    <button
      onClick={() => onSelectSection(id)}
      className="w-8 h-8 bg-[#591DDD] mt-7 rounded-md mx-7 custom-shadow flex items-center justify-center text-2xl"
    >
      {children}
    </button>
  )
}

export default Button
