import React from 'react'

type Props = {
  usersTickets: number
}

const UserTickets: React.FC<Props> = ({ usersTickets }) => {
  return (
    <div className='stats'>
      <p className='text-lg mb-2'>You have {usersTickets} in this draw</p>
      <div className='flex max-w-sm flex-wrap gap-x-2 gap-y-2'>
        {Array(usersTickets)
          .fill('')
          .map((_, idx) => (
            <p
              key={idx}
              className='text-emerald-300 h-20 w-12 bg-emerald-500/30 rounded-lg flex flex-shrink-0 items-center justify-center text-xs italic'
            >
              {idx + 1}
            </p>
          ))}
      </div>
    </div>
  )
}

export default UserTickets
