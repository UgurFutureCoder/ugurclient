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
                <NavLink to='/'>
                  <img src={require('../../assets/main-page/nav-bar/Frame 10.svg').default} alt=""/>
                  <p>Blog</p>
                </NavLink>
              </li>
              <li>
                <NavLink to='contact'>
                  <img src={require('../../assets/main-page/nav-bar/Frame 11.svg').default} alt=""/>
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
