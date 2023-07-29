import React, { FC } from 'react'
import s from './MainPage.module.scss'
import {Link, useActionData} from "react-router-dom";
import {Posts} from "./Posts/Posts";

export const MainPage: FC = () => {
  return (
      <main className={s.main_page}>
        <div className={s.container}>
          <nav className={s.nav_bar}>
            <ul>
              <li>
                <Link to='blog'>
                  <img src={require('../../assets/main-page/nav-bar/Frame 10.svg').default} alt=""/>
                  <p>Blog</p>
                </Link>
              </li>
              <li>
                <Link to='blog'>
                  <img src={require('../../assets/main-page/nav-bar/Frame 11.svg').default} alt=""/>
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </nav>
          <section className={s.blog_container}>
            <Posts />
          </section>
        </div>
      </main>
  )
}
