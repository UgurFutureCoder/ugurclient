import React, { FC } from 'react'
import s from './NotFound.module.scss'
import {useLocation, useNavigate, useNavigation} from "react-router-dom";

export const NotFound: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goHome = () => {
        navigate('/', {replace: true})
    }

  return (
    <section className={s.error_page}>
        <img src={require('../../../assets/errors/not-found/Frame 1 (1).svg').default} alt=""/>
        <img src={require('../../../assets/errors/not-found/404 Error-pana 1.svg').default} alt=""/>
        <p className={s.error_message}>Sorry, but we couldn’t found path <span className={s.path_name}>{location.pathname}</span></p>
        <div className={s.buttons}>
            <button onClick={() => goBack()}>Go Back</button>
            <button onClick={() => goHome()}>Go Home</button>
        </div>
    </section>
  )
}
