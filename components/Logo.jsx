import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Image src={'/logoipsum-269.svg'} width={50} height={50} priority alt=''/>
        </div>
    )
}

export default Logo