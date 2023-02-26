import React from 'react'

import { Web3Button } from '@thirdweb-dev/react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center mb-10 text-center'>
        <Image
          className='rounded-full mb-10'
          src='https://i.imgur.com/4h7mAu7.png'
          alt='picture'
          width={120}
          height={120}
        />
        <h1 className='text-6xl text-white font-bold'>Dmitrij's Draw</h1>
        <h2 className='text-white mt-2'>
          Get Started By Logging In With MetaMask
        </h2>

        <Web3Button
          className='mt-4'
          contractAddress='0xF1f1632EA91C9143691E218F47A4f60b6DE56550' // Your smart contract address
          action={(contract) => console.log(contract)} // Logic to execute when clicked
        >
          Execute Action
        </Web3Button>
      </div>
    </div>
  )
}

export default Login
