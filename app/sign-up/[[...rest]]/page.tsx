import React from 'react'
import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <SignUp 
        signInForceRedirectUrl='/'
        signInUrl="/sign-in"
      />
    </div>
  )
}

export default page