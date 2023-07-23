import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
  return (
    <div className="wrapper">
        <header>Header</header>
        <main className='main_content_container'>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </div>
  )
}
