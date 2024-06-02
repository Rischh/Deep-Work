import { NodeTemplateProps } from '@renderer/models/Props'

const NodeTemplate = ({ name, date, img }: NodeTemplateProps) => {
  return (
    <>
      <div className="p-2">
        <div className="text-lg font-medium">{name}</div>
        <div className="text-sm">{date}</div>
        <div className="flex justify-center pt-4">{img}</div>
      </div>
    </>
  )
}

export default NodeTemplate
