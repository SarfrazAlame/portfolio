import Form from '@/components/Form'
import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4 '>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            <div>Say hello</div>
                        </div>
                        <h1 className='text-3xl font-bold text-gray-600 max-w-md mb-8 dark:text-gray-200'>Let's Work Together</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisi cupiditate explicabo alias  cusamus repellendus quia?</p>
                    </div>
                    <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>

                    </div>
                </div>
                <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-sm '>
                        <div className='flex items-center gap-x-8'>
                            <MailIcon size={18} className='text-primary' />
                            <div>sarfrazk7858@gmail.com</div>
                        </div>
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon size={18} className='text-primary' />
                            <div>Gopalganj, Bihar, India</div>
                        </div>
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall size={18} className='text-primary' />
                            <div>7858016352</div>
                        </div>
                    </div>
                   <Form/>
                </div>
            </div>
        </section>
    )
}

export default page
