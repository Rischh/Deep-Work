import { ButtonProps } from '../../models/Props'

const Button = ({ children, onSelectSection, id }: ButtonProps) => {
  return (
    <button
      onClick={() => onSelectSection(id)}
      className="w-8 h-8 bg-[#591DDD] mt-7 rounded-md mx-7 base-shadow hover:hover-shadow focus:hover-shadow flex items-center justify-center text-2xl"
    >
      {children}
    </button>
  )
}

export default Button
