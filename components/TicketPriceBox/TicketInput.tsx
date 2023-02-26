import React from 'react'
import { currency } from '@/constants'
import { ethers } from 'ethers'
import { useContract, useContractRead } from '@thirdweb-dev/react'

type Props = {
  ticketQuantity: number
  setTicketQuantity: (quantity: number) => void
}

const TicketInput: React.FC<Props> = ({
  ticketQuantity,
  setTicketQuantity,
}) => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: ticketPrice } = useContractRead(contract, 'ticketPrice')
  return (
    <>
      <div className='flex justify-between items-center text-white pb-2'>
        <h2>Price per Ticket</h2>
        <p>
          {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{' '}
          {currency}
        </p>
      </div>

      <div className='flex items-center text-white space-x-3 bg-[#091B18] border-[#004337] border p-4 rounded-md'>
        <p>TICKETS</p>
        <input
          className='flex w-full bg-transparent text-right outline-none'
          type='number'
          min={1}
          max={10}
          value={ticketQuantity}
          onChange={(e) => setTicketQuantity(Number(e.target.value))}
        />
      </div>
    </>
  )
}

export default TicketInput
