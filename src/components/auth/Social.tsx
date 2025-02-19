import React from 'react'
import {FcGoogle } from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const Social = () => {
  return (
    <div className='flex space-x-4 w-full'>
      <Button size="lg" className='w-full' variant={'outline'} onClick={() => console.log('Google')}>
    <FcGoogle className='w-full'/>
      </Button>
      <Button size="lg" className='w-full' variant={'outline'} onClick={() => console.log('Github')}>
    <FaGithub/>
      </Button>
    </div>
  )
}

export default Social
