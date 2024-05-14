import BlockedList from './BlockedList'

const Content = () => {
  const contentToRender = <BlockedList />

  return (
    <div className="col-span-3 row-span-12 bg-slate-900/65 border-l border-l-white/10">
      {contentToRender}
    </div>
  )
}

export default Content
