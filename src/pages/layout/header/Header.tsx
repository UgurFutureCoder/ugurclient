import s from './Header.module.scss'
import {FC, useState} from "react";
import {Link} from "react-router-dom";

export const Header: FC = () => {
    const [auth, setAuth] = useState(true);
    const length: number = 5;
    const [isActiveBurger, setActiveBurger] = useState(false);

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
                        <nav className={s.author_panel}>
                            <Link className={s.notifications} to='notifications'>
                                <svg width="26" height="32" viewBox="0 0 26 32" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0283 3.1225C8.33917 3.1225 4.52834 6.93333 4.52834 11.6225V15.7167C4.52834 16.5808 4.16 17.8983 3.72084 18.635L2.09167 21.3408C1.08584 23.0125 1.78 24.8683 3.62167 25.4917C9.7275 27.5317 16.315 27.5317 22.4208 25.4917C24.135 24.925 24.8858 22.8992 23.9508 21.3408L22.3217 18.635C21.8967 17.8983 21.5283 16.5808 21.5283 15.7167V11.6225C21.5283 6.9475 17.7033 3.1225 13.0283 3.1225Z" stroke="#FF8A00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                    <path d="M15.6491 3.53332C13.936 3.04541 12.1206 3.04541 10.4075 3.53332C10.8183 2.48499 11.8383 1.74832 13.0283 1.74832C14.2183 1.74832 15.2383 2.48499 15.6491 3.53332Z" stroke="#FF8A00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.2783 26.0017C17.2783 28.3392 15.3658 30.2517 13.0283 30.2517C11.8667 30.2517 10.79 29.77 10.025 29.005C9.22904 28.2079 8.78086 27.1282 8.77832 26.0017" stroke="#FF8A00" stroke-width="1.5" stroke-miterlimit="10"/>
                                </svg>
                                {
                                    length
                                    ?
                                        <span className={s.notifications_length}>{length}</span>
                                    :
                                        null
                                }
                            </Link>
                            <Link className={s.create_post} to='create_post'>Create Post</Link>
                            <Link className={s.profile_link} to='profile'>
                                <img src={require('../../../assets/layout/header/Frame 7.svg').default} alt="File"/>
                            </Link>
                        </nav>
                    ) : (
                        <nav className={s.auth_links}>
                            <Link className={s.log_in_link} to='signIn'>Log in</Link>
                            <Link className={s.create_account_link} to='signIn'>Create account</Link>
                        </nav>
                    )

                }
                <div className={s.burger}>
                    <button onClick={() => setActiveBurger(!isActiveBurger)} className={isActiveBurger ? `${s.burger_button} ${s.burger_button_active}` : s.burger_button}>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}