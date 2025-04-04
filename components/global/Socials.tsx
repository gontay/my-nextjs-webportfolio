import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Socials = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center text-center">
        <Link href="https://www.linkedin.com/in/gerald-tay-kai-wen-089a62134/" className='justify-center hover:scale-125'><LinkedInLogoIcon className="size-5 "/></Link>
        <Link href="https://github.com/gontay"><GitHubLogoIcon className="size-5 hover:scale-125"/></Link>
        <Link href="https://www.instagram.com/gontographs/"><InstagramLogoIcon className="size-5 hover:scale-125"/></Link>
    </div>
  )
}

export default Socials