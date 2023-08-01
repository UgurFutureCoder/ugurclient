import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from "./header/Header";

export const Layout: FC = () => {
  return (
    <div className="wrapper">
        <Header />
        <main className='main_content_container'>
            <Outlet />
        </main>
    </div>
  )
}
