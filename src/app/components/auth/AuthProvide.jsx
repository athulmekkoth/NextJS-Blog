"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'



 const AuthProvide = ({children}) => {
   return (
    <SessionProvider>
      {children}
    </SessionProvider>
   )
 }
 
 export default AuthProvide