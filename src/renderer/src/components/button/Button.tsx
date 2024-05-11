const Button = ({ section }: { section: string }) => {
  return (
    <button className="focus:bg-gradient-to-r from-slate-700 to-slate-900 text-white py-2 mb-4 text-base rounded font-medium gradient element-to-rotate">
      {section}
    </button>
  )
}

export default Button
