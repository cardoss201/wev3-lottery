import React from 'react'
import {
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react'
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from '@heroicons/react/24/solid'
import { ethers } from 'ethers'
import { currency } from '@/constants'
import { toast } from 'react-hot-toast'

const AdminControls = () => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')

  const { data: totalComission } = useContractRead(
    contract,
    'operatorTotalCommission'
  )

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    'DrawWinnerTicket'
  )

  const { mutateAsync: restartDraw } = useContractWrite(contract, 'restartDraw')

  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    'WithdrawCommission'
  )

  const { mutateAsync: RefundAll } = useContractWrite(contract, 'RefundAll')

  const drawWinner = async () => {
    const notification = toast.loading('Drawing...')

    try {
      const data = await DrawWinnerTicket([{}])
      toast.success('Winnig ticket is drawn!', {
        id: notification,
      })
    } catch (err) {
      toast.error('Something went wrong', {
        id: notification,
      })
    }
  }

  const restart = async () => {
    const notification = toast.loading('Restarting...')

    try {
      await restartDraw([{}])
      toast.success('Restarted', {
        id: notification,
      })
    } catch (err) {
      toast.error('Something went wrong', {
        id: notification,
      })
    }
  }

  const takeOutComission = async () => {
    const notification = toast.loading('Withdrawing...')

    try {
      await WithdrawCommission([{}])
      toast.success('Withdrawn', {
        id: notification,
      })
    } catch (err) {
      toast.error('Something went wrong', {
        id: notification,
      })
    }
  }
  const refund = async () => {
    const notification = toast.loading('Refunding...')

    try {
      const data = await RefundAll([{}])
      toast.success('Refunded', {
        id: notification,
      })
    } catch (err) {
      toast.error('Something went wrong', {
        id: notification,
      })
    }
  }
  return (
    <div className='text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border'>
      <h2 className='font-bold'>Admin Controls</h2>
      <p className='mb-5'>
        Total comission to be whithdrawn:{' '}
        {totalComission && ethers.utils.formatEther(totalComission.toString())}{' '}
        {currency}
      </p>

      <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 '>
        <button className='admin-button' onClick={drawWinner}>
          <StarIcon /> Draw Winner
        </button>
        <button className='admin-button' onClick={takeOutComission}>
          <CurrencyDollarIcon /> Whithdraw comission
        </button>
        <button className='admin-button' onClick={restart}>
          <ArrowPathIcon /> Restart Draw
        </button>
        <button className='admin-button' onClick={refund}>
          <ArrowUturnDownIcon /> Refund All
        </button>
      </div>
    </div>
  )
}

export default AdminControls
