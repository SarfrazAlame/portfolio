import Link from 'next/link'
import React from 'react'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiInstallFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri'

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />
  },
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiFacebookFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  },
]

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>
              {icon.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Social