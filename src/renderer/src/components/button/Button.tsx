import Props from '@renderer/models/Props'

const Button = ({ children, onSelectedSection }: Props) => {
  return (
    <button
      onClick={() => onSelectedSection(children)}
      className="focus:bg-gradient-to-r from-slate-700 to-slate-900 text-white py-2 mb-4 text-base rounded font-medium gradient element-to-rotate"
    >
      {children}
    </button>
  )
}

export default Button
