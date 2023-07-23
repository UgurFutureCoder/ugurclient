import React from 'react';
import ReactDOM from 'react-dom/client';
import './main-styles/fonts.css';
import './main-styles/normolize.css'
import './main-styles/reset.css'
import { Routing } from './routing/Routing';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
);
window.addEventListener('load', (): void => {
    document.querySelector('.loader')?.remove();
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals