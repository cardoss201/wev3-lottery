import React from 'react'
import { ethers } from 'ethers'
import { currency } from '@/constants'
import { useContract, useContractRead } from '@thirdweb-dev/react'

import CountDown from '../CountDown/CountDown'

const NextDrawBox = () => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: CurrentWinningReward } = useContractRead(
    contract,
    'CurrentWinningReward'
  )
  const { data: remainingTickets } = useContractRead(
    contract,
    'RemainingTickets'
  )
  return (
    <div className='stats-container'>
      <h1 className='text-5xl text-white font-semibold text-center'>
        The Next Draw
      </h1>

      <div className='flex justify-between p-2 space-x-2'>
        <div className='stats'>
          <h2 className='text-sm'>Total Pool</h2>
          <p className='text-xl'>
            {CurrentWinningReward &&
              ethers.utils.formatEther(CurrentWinningReward.toString())}{' '}
            {currency}
          </p>
        </div>

        <div className='stats'>
          <h2 className='text-sm'>Tickets Remaining</h2>
          <p className='text-xl'>{remainingTickets?.toNumber()}</p>
        </div>
      </div>

      <div className='mt-5 mb-3'>
        <CountDown />
      </div>
    </div>
  )
}

export default NextDrawBox
