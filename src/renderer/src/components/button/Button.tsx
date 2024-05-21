import { SectionProps } from '../../models/Props'

const Button = ({ children, onSelectSection }: SectionProps) => {
  return (
    <button
      onClick={() => onSelectSection(children)}
      className="btn btn-ghost text-slate-50 py-2 ml-3 mb-4 text-base font-medium "
    >
      {children}
    </button>
  )
}

export default Button
