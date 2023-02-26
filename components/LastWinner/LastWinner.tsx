import React from 'react'
import { ethers } from 'ethers'

import { currency } from '@/constants'
import { useContract, useContractRead } from '@thirdweb-dev/react'

import Marquee from 'react-fast-marquee'

const LastWinnerLine = () => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: lastWinner } = useContractRead(contract, 'lastWinner')
  const { data: lastWinnerAmount } = useContractRead(
    contract,
    'lastWinnerAmount'
  )

  return (
    <Marquee className='bg-[#0A1F1C] p-5 mb-5' gradient={false} speed={100}>
      <div className='flex space-x-2 mx-10'>
        <h4 className='text-white font-bold'>
          Last Winner: {lastWinner?.toString()}
        </h4>
        {/* <h4 className='text-white font-bold'>
          Pervious Winnings: {ethers.utils.formatEther(lastWinnerAmount)}{' '}
          {currency}
        </h4> */}
      </div>
    </Marquee>
  )
}

export default LastWinnerLine
