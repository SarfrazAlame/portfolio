import Link from 'next/link'
import React from 'react'
import { RiArrowDownSLine, RiBriefcase4Fill } from "react-icons/ri"
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Social from './Social'
import DevImg from './DevImg'
import Badge from './Badge'

const Hero = () => {
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center
                    xl:text-left
                    '>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                            Full Stack Web Developer
                        </div>
                        <h1 className='text-2xl xl:text-3xl font-bold text-gray-700 mb-4 dark:text-gray-400'>Hello, my name is Sarfraz Ashrafi</h1>
                        <p className='text-sm text-slate-700 max-w-[490px] mx-auto xl:mx-0 mb-4  dark:text-gray-400'>
                            Brief description with insights into myself, my vocational
                            journey, and what I engage in professionally.
                        </p>

                        <div className='flex flex-col gap-y-3 sm:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button variant='outline'>
                                    Contact me
                                </Button>
                            </Link>
                            <Link href='/contact'>
                                <Button variant='secondary'>
                                    Download CV <Download size={18} className='mx-1' />
                                </Button>
                            </Link>
                        </div>
                        <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                    </div>
                    <div className='hidden xl:flex relative'>
                        {/* <Badge icon={<RiBriefcase4Fill />} endCountNum={2} badgeText="Years of Exprience"/> */}
                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] 
                        bg-no-repeat absolute -top-1 -right-2 
                        '>
                        </div>
                        <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                            imgSrc='/hero/developer.png'
                        />
                    </div>
                </div>
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    )
}

export default Hero