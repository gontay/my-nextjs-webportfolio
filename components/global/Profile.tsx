import Image from 'next/image'
import React from 'react'
import Socials from './Socials'
import { Separator } from '../ui/separator'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className="w-full max-w-5xl items-center rounded-lg ">
    <div className="flex-col justify-center items-center dark:drop-shadow-glow">
      <div className='flex justify-center items-center pt-12 rounded-full p-4'>
            <Image src="/images/photo.jpg" 
            width={100}
            height={100}
            alt='something'
            className='rounded-full outline outline-1 outline-black dark:outline-white outline-offset-2'/>
        </div>
      <div className='flex gap-2 justify-center text-center'>
          <h1 className='text-2xl font-bold'>Gerald Tay</h1>
          <h1 className='text-2xl font-bold'>郑凯文</h1>
        </div>
      <div className='flex gap-2 justify-center text-center pb-10'>
        <p>
          Aspiring Business Analyst / Intellectual / Muay Thai Practitioner / Tennis Player
        </p>
      </div>
      <Socials/>
    </div>
    <Separator className="my-4"/>
    <h1 className="justify-center text-center text-xl font-bold p-5">About Me</h1>
    <div>
      <p>I am an easy going individual with a passion for learning, people, sports and technology. I intent to sharpen and broaden my skills and perspectives to better understand and convey ideas to people from different backgrounds in an effective manner.</p>
    </div>
  </div>
  
  )
}

export default Profile