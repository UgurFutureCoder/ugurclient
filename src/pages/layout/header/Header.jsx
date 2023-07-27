import s from './Header.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    const [auth, setAuth] = useState(false);

    return (
        <header>
            <div className={s.header_container}>
                <img className={s.logo} src={require('../../../assets/layout/header/Frame 4.svg').default} alt=""/>
                <div className={s.search_input}>
                    <input type="text"/>
                    <button><img src={require('../../../assets/layout/header/Frame 2 (1).svg').default} alt=""/></button>
                </div>
                <button className={s.lang}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9009 4.02002H1.09921M9.00004 1.36002V4.02002M12.9584 3.98835C12.9584 10.7967 7.63837 16.3067 1.08337 16.3067" stroke="#FF8A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.9167 17.3067C14.0667 17.3067 11.5334 15.7867 9.71252 13.3958" stroke="#FF8A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                {
                    auth
                    ?   (
                        <div>profile</div>
                    ) : (
                        <div className={s.auth_links}>
                            <Link className={s.log_in_link} to='signIn'>Log in</Link>
                            <Link className={s.create_account_link} to='signIn'>Create account</Link>
                        </div>
                    )

                }
            </div>
        </header>
    )
}