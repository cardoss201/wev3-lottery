import React from 'react'
import { useContract, useContractRead } from '@thirdweb-dev/react'
import Countdown from 'react-countdown'

type Timer = {
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const CountDown = () => {
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')

  const { data: expiration } = useContractRead(contract, 'expiration')

  const renderer = ({ hours, minutes, seconds, completed }: Timer) => {
    if (completed) {
      return (
        <div>
          <h2 className='text-white text-xl text-center animate-bounce'>
            Ticket Sale Is CLOSED For This Draw
          </h2>
        </div>
      )
    } else {
      return (
        <div>
          <h3 className='text-white text-sm mb-2 italic'>Time Remaining</h3>

          <div className='flex space-x-6'>
            <div className='flex-1'>
              <div className='CountDown animate-pulse'>{hours ? hours : 0}</div>
              <div className='CountDown-label'>hours</div>
            </div>

            <div className='flex-1'>
              <div className='CountDown animate-pulse'>
                {minutes ? minutes : 0}
              </div>
              <div className='CountDown-label'>minutes</div>
            </div>

            <div className='flex-1'>
              <div className='CountDown animate-pulse'>
                {seconds ? seconds : 0}
              </div>
              <div className='CountDown-label'>seconds</div>
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <div>
      <Countdown date={new Date(expiration * 1000)} renderer={renderer} />
    </div>
  )
}

export default CountDown
