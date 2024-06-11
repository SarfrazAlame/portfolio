'use client'
import ProjectCard from '@/components/ProjectCard'
import React, { useState } from 'react'

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

const page = () => {
  return (
    <div className='grid lg:grid-cols-3 '>
      {
        projectData.map((project, index) => (
          <ProjectCard project={project} />
        ))
      }
    </div>
  )
}

export default page
