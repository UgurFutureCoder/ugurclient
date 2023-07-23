import React, { FC } from 'react'
import s from './NotFound.module.scss'
import {useLocation, useNavigate, useNavigation} from "react-router-dom";

export const NotFound: FC = () => {
    const location = useLocation();

  return (
    <div className={s.error_page}>
        <p>404 | Page not found on path <span className={s.path_name}>{location.pathname}</span></p>
    </div>
  )
}
