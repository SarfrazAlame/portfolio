import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <footer className='bg-gray-700 py-12'> 
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4 '
          iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
          />

          <div className='text-muted-foreground text-[14px]'>
            Copyright &copy; Sarfraz Ashrafi. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer