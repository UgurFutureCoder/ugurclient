import React, { FC } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Layout } from '../pages/Layout/Layout'
import { NotFound } from '../pages/Errors/not-found/NotFound'
import { MainPage } from '../pages/main-page/MainPage'

export const Routing: FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />}/>
            </Route>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
