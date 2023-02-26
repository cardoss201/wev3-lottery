import React from 'react'

import Image from 'next/image'
import { SyncLoader } from 'react-spinners'

const Loading = () => {
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

        <SyncLoader className='mt-4' margin={3} color='#36d7b7' />
      </div>
    </div>
  )
}

export default Loading
