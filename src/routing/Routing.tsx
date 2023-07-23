import React, { FC } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Layout } from '../pages/layout/Layout'
import { NotFound } from '../pages/errors/not-found/NotFound'
import { MainPage } from '../pages/main-page/MainPage'
import {SignIn} from "../pages/authorization/SignIn";

export const Routing: FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />}/>
            </Route>
            <Route path='/signIn' element={<SignIn />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
