import { NavbarProps } from '@renderer/models/Props'

const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#020414] to-[#1C1B1F] h-12 w-full flex rounded-tr-md border-b border-[#1C1B1F]">
        {children}
      </div>
    </>
  )
}

export default Navbar
