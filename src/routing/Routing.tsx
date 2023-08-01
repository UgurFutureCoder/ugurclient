import React, { FC } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Layout } from '../pages/layout/Layout'
import { NotFound } from '../pages/errors/not-found/NotFound'
import { MainPage } from '../pages/main-page/MainPage'
import {SignIn} from "../pages/authorization/SignIn";
import { Posts } from '../pages/main-page/Posts/Posts'
import { Contact } from '../pages/main-page/contact/Contact'

export const Routing: FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='' element={<MainPage />}>
                  <Route path='/' element={<Posts />}/>
                  <Route path='contact' element={<Contact />}/>  
                </Route>
            </Route>
            <Route path='/signIn' element={<SignIn />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
