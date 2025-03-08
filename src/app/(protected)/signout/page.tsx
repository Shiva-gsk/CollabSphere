// "use client"
import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  const handleSignOut = async ()=> {
    "use server"
    // event.preventDefault()
    await signOut()
  }

  return (
    <div>
      Dashboard
      <Button onClick={handleSignOut}> Sign Out
      </Button>
    </div>
  )
}

export default page