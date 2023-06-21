import React from 'react'

import { Outlet } from 'react-router-dom'
import { Header } from '../components'

function UserLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default UserLayout