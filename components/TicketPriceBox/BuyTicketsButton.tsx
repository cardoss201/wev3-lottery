import React from 'react'
import { currency } from '@/constants'
import { ethers } from 'ethers'
import toast from 'react-hot-toast'
import {
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react'

type Props = {
  ticketQuantity: number
}

const BuyTicketsButton: React.FC<Props> = ({ ticketQuantity }) => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: expiration } = useContractRead(contract, 'expiration')
  const { data: remainingTickets } = useContractRead(
    contract,
    'RemainingTickets'
  )
  const { data: ticketPrice } = useContractRead(contract, 'ticketPrice')
  const { mutateAsync: BuyTickets } = useContractWrite(contract, 'BuyTickets')

  const handleClick = async () => {
    if (!ticketPrice) return

    const notification = toast.loading('Buying Tickets')

    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * ticketQuantity
            ).toString()
          ),
        },
      ])

      toast.success('Tickets purchased succesfully', {
        id: notification,
      })
    } catch (err) {
      toast.error('Something Went Wrong...', {
        id: notification,
      })
    }
  }
  return (
    <button
      disabled={
        expiration?.toString() < Date.now().toString() ||
        remainingTickets?.toNumber() === 0
      }
      className='mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md text-white shadow-xl hover:opacity-50 disabled:from-gray-600 disabled:to-gray-100 disabled:cursor-not-allowed'
      onClick={handleClick}
    >
      Buy {ticketQuantity} tickets for{' '}
      {ticketPrice &&
        Number(ethers.utils.formatEther(ticketPrice.toString())) *
          ticketQuantity}{' '}
      {currency}
    </button>
  )
}

export default BuyTicketsButton
