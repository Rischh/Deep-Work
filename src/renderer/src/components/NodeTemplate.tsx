import { NodeTemplateProps } from '@renderer/models/Props'

const NodeTemplate = ({ name, date, img }: NodeTemplateProps) => {
  return (
    <>
      <div className="p-2">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-xs">{date}</div>
        <div className="flex justify-center pt-4 text-3xl text-[#6837D2]">{img}</div>
      </div>
    </>
  )
}

export default NodeTemplate
