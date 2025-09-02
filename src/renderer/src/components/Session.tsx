import { useRef } from 'react'

const Session = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  return <dialog ref={dialogRef}>Hello</dialog>
}

export default Session
