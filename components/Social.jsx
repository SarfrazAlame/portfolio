import Link from 'next/link'
import React from 'react'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiInstallFill, RiLinkedinFill, RiTwitchFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

const icons = [
  {
    path: 'https://x.com/sarfrazk7858',
    name: <RiTwitterFill />
  },
  {
    path: 'https://www.linkedin.com/in/sarfraz-alam-25a262236/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/SarfrazAlame',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.facebook.com/profile.php?id=100055752636949',
    name: <RiFacebookFill />
  },
  {
    path: 'https://www.instagram.com/sarfrazalam532/',
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