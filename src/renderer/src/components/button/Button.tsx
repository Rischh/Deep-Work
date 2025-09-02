import { useContext } from 'react'
import { ButtonProps } from '../../models/Props'
import ContentContext from '../contexts/contentContext'

const Button = ({ children, id }: ButtonProps) => {
  const { dispatch } = useContext(ContentContext)

  const handleClick = (id: 'home' | 'create') => {
    dispatch({ type: id })
  }

  return (
    <button
      onClick={() => {
        handleClick(id)
      }}
      className="w-7 h-7 bg-[#591DDD] mt-7 rounded-md mx-7 button-shadow hover:bg-[#34117f] focus:bg-[#34117f] flex items-center justify-center text-2xl"
    >
      {children}
    </button>
  )
}

export default Button
