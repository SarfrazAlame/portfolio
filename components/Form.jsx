import React from 'react'
import { Input } from './ui/input'
import { ArrowRightIcon, MailIcon, MessagesSquare, User } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Form = () => {
    return (
        <form className='flex flex-col gap-y-4'>
            <div className='relative flex items-center'>
                <Input type='name' id='name' placeholder='Name' />
                <User className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Input type='email' id='email' placeholder='Email' />
                <MailIcon className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Textarea placeholder='Type Your Message' />
                <MessagesSquare className='absolute right-6 top-4' size={20} />
            </div>
            <Button className='flex items-center max-w-[166px] gap-x-1'>Let's Talk <ArrowRightIcon size={20} /> </Button>
        </form>
    )
}

export default Form