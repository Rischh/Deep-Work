import Props from '@renderer/models/Props'

const Button = ({ children, onSelectSection }: Props) => {
  return (
    <button
      onClick={() => onSelectSection(children)}
      className="btn btn-ghost text-white py-2 mb-4 text-base font-medium gradient element-to-rotate"
    >
      {children}
    </button>
  )
}

export default Button
