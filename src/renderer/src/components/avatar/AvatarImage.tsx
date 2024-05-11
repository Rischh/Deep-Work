const AvatarImage = ({ svg }: { svg: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />
}
export default AvatarImage
