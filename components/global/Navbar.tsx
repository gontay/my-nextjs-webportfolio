import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '../ld-toggle'
import Link from 'next/link'
import { Button } from '../ui/button'
import { SiGitbook } from "react-icons/si";
import { link } from 'fs'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="sticky top-0 z-10 flex max-w-3xl place-content-between place-items-center p-2 shadow-md rounded-md bg-slate-100 dark:bg-black dark:drop-shadow-glow ">
      <Link href="/">
        <Image src="/images/light/favicon-32x32.png" alt="image"
          width={32}
          height={32}
          className='dark:hidden hover:scale-110'
          />
        <Image src="/images/dark/favicon-32x32.png" alt="image" 
          width={32}
          height={32}
          className='hidden dark:block hover:scale-110'
          />
      </Link>
      <div className='flex justify-items-end'>
      <Link href="https://github.com/gontay">
        <Button variant="link" className='dark:hidden font-black'>Projects</Button>
        <Button variant="linkDark" className='hidden dark:block'>Projects</Button>
      </Link>
      </div>
      <div className='flex justify-items-end'>
      <Link href="https://gontay.substack.com/">
        <Button variant="link" className='dark:hidden font-black'>Blogs</Button>
        <Button variant="linkDark" className='hidden dark:block'>Blogs</Button>
      </Link>
      </div>
      <div className='flex gap-x-2'>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar;
