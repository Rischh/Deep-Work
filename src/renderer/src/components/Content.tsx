const Content = ({ props }) => {
  const noContentToRender = props === undefined && (
    <div className="h-screen flex justify-center items-center font-semibold text-2xl text-gray-500">
      Select a section to display the content
    </div>
  )

  return (
    <div className="col-span-3 row-span-12 bg-slate-900/65 border-l border-l-white/10">
      {noContentToRender}
      {props}
    </div>
  )
}

export default Content
