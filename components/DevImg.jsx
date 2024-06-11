import Image from 'next/image'
import React from 'react'

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc}  alt='' width={300} height={200} className='rounded-full'/>
    </div>
  )
}

export default DevImg