import { SectionProps } from '../../models/Props'

const Button = ({ children, onSelectSection }: SectionProps) => {
  return (
    <button
      onClick={() => onSelectSection(children)}
      className="flex justify-start btn btn-ghost py-2 text-slate-50 mx-3 mb-2 text-base font-medium "
    >
      {children}
    </button>
  )
}

export default Button
