import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Image src={'/logoipsum-269.svg'} width={54} height={54} priority alt='' />
        </div>
    )
}

export default Logo