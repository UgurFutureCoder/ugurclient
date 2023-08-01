import React, { FC } from 'react'
import s from './MainPage.module.scss'
import {Link, NavLink, Routes, Route, Outlet} from "react-router-dom";
import {Posts} from "./Posts/Posts";

export const MainPage: FC = () => {
  return (
      <main className={s.main_page}>
        <div className={s.container}>
          <nav className={s.nav_bar}>
            <ul>
              <li>
                <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='/'>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L16 2.66666L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 29.3333V16H20V29.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p>Blog</p>
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='contact'>
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2121 12H11.1111M21.2121 20H11.1111M12.1212 29.3333H20.202C26.936 29.3333 29.6296 26.6667 29.6296 20V12C29.6296 5.33334 26.936 2.66667 20.202 2.66667H12.1212C5.38721 2.66667 2.6936 5.33334 2.6936 12V20C2.6936 26.6667 5.38721 29.3333 12.1212 29.3333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p>Contact</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </main>
  )
}
