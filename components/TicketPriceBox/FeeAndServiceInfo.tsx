import React from 'react'
import { ethers } from 'ethers'
import { currency } from '@/constants'
import { useContract, useContractRead } from '@thirdweb-dev/react'

type Props = {
  ticketQuantity: number
}

const FeeAndServiceInfo: React.FC<Props> = ({ ticketQuantity }) => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: ticketCommission } = useContractRead(
    contract,
    'ticketCommission'
  )
  const { data: ticketPrice } = useContractRead(contract, 'ticketPrice')
  return (
    <div className='space-y-2 mt-5'>
      <div className='flex items-center justify-between text-emerald-300 text-sm italic font-bold'>
        <p>Total Cost Of Tickets</p>
        <p>
          {ticketPrice &&
            Number(ethers.utils.formatEther(ticketPrice?.toString())) *
              ticketQuantity}{' '}
          {currency}
        </p>
      </div>

      <div className='flex items-center justify-between text-emerald-300 text-xs italic'>
        <p>Service Fees</p>
        <p>
          {ticketCommission &&
            ethers.utils.formatEther(ticketCommission.toString())}{' '}
          {currency}
        </p>
      </div>

      <div className='flex items-center justify-between text-emerald-300 text-xs italic'>
        <p>+ Network Fees</p>
        <p>TBC</p>
      </div>
    </div>
  )
}

export default FeeAndServiceInfo
