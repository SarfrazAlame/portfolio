import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold text-gray-700 max-w-xl text-center mb-8 dark:text-gray-300'>Prepared to turn your ideas into reality?  I'm here to help</h2>
          <Link href={'/contact'}>
            <Button>
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta