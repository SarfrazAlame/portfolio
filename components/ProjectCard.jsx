import React from 'react'
import { Card, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import {  Link2Icon } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader>
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image className='absolute bottom-0 shadow-2xl'
            src={project.image}
            width={247}
            height={250}
            alt=''
            priority
          />
          <div className='flex gap-2'>
            <Link href={project.link}
            className='bg-gray-700 dark:bg-white w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Link2Icon className='dark:text-gray-900 text-gray-100'/>
            </Link>
            <Link href={project.github}
            className='bg-gray-700 dark:bg-white w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <GitHubLogoIcon className='dark:text-gray-900 text-gray-100'/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1 text-gray-700 dark:text-gray-200'>{project.name}</h4>
        <p className='text-muted-foreground  text-sm '>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard