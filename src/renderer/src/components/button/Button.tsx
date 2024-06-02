import { useContext } from 'react'
import { ButtonProps } from '../../models/Props'
import ContentContext from '../contexts/contentContext'

const Button = ({ children, id }: ButtonProps) => {
  const { dispatch } = useContext(ContentContext)

  const handleClick = (id: 'home' | 'create' | 'blocked') => {
    dispatch({ type: id })
  }

  return (
    <button
      onClick={() => {
        handleClick(id)
      }}
      className="w-8 h-8 bg-[#591DDD] mt-7 rounded-md mx-7 base-shadow hover:hover-shadow focus:hover-shadow flex items-center justify-center text-2xl"
    >
      {children}
    </button>
  )
}

export default Button
