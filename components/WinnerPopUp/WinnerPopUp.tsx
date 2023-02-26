import React from 'react'
import { ethers } from 'ethers'
import { currency } from '@/constants'
import toast from 'react-hot-toast'
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react'

const WinnerPopUp = () => {
  const adress = useAddress()
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: winnings } = useContractRead(
    contract,
    'getWinningsForAddress',
    adress
  )
  const { mutateAsync: WithdrawWinnings } = useContractWrite(
    contract,
    'WithdrawWinnings'
  )

  const withdrawUserWinnings = async () => {
    const notification = toast.loading('Whithdrawing Your Winnings...')

    try {
      await WithdrawWinnings([{}])

      toast.success('Winning Sent', {
        id: notification,
      })
    } catch (err) {
      toast.error('Something went wront', {
        id: notification,
      })
    }
  }
  return (
    <div className='max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5'>
      <button
        onClick={withdrawUserWinnings}
        className='p-5 bg-gradient-to-b from-orange-500 to-emerald-600 animate-pulse text-center rounded-xl w-full'
      >
        <p className='font-bold'>Winner Winner Chicken Dinner!</p>
        <p>
          Totla Winnings: {ethers.utils.formatEther(winnings.toString())}{' '}
          {currency}
        </p>
        <br />
        <p className='font-semibold'>Click here to whithdraw</p>
      </button>
    </div>
  )
}

export default WinnerPopUp
