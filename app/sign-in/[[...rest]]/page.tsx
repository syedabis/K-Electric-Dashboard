import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <SignIn 
        signUpForceRedirectUrl='/'
        signUpUrl="/sign-up"
      />
    </div>
  )
}

export default page