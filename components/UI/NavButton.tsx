import React from 'react'

type Props = {
  title: string
  isActive?: boolean
  onClick?: () => void
}

const NavButton: React.FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive && 'bg-[#036756]'
      } text-white rounded p-2 hover:bg-[#036756] font-bold`}
    >
      {title}
    </button>
  )
}

export default NavButton
