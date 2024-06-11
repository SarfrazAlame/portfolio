'use client'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Button } from './ui/button'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        image: '/work/3.png',
        category: 'Next js',
        name: 'twitter clone',
        description: 'I have created twitter clone with nextjs nodejs reactjs, postgresql, prismaORM etc...',
        link: '/',
        github: '/'
    },
    {
        image: '/work/4.png',
        category: 'Next js',
        name: 'Pinstagram',
        description: 'I have created instagram clone with nextjs nodejs reactjs, postgresql, prismaORM etc...',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Whatsapp',
        description: 'I have created twitter clone with nextjs nodejs reactjs, postgresql, prismaORM etc...',
        link: '/',
        github: '/'
    },
]

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Projects Building</h2>
                    <p className='mb-2'>Udemy clone</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0 '>
                    <Swiper className='h-[480px] bg-pink-100' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                    }} spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {
                            projectData.map((project, index) => {
                                return <SwiperSlide>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work