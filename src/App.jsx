import React from 'react'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <>
      <Toaster position="top-right"/>
      <Outlet />
    </>
  )
}
