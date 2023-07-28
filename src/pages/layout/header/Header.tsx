import s from './Header.module.scss'
import {FC, useState} from "react";
import {Link} from "react-router-dom";

export const Header: FC = () => {
    const [auth, setAuth] = useState(true);
    const length: number = 0;
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
                <button onClick={() => setActiveBurger(!isActiveBurger)} className={isActiveBurger ? `${s.burger_button} ${s.burger_button_active}` : s.burger_button}>
                    <span></span>
                </button>
            </div>
            <div className={isActiveBurger ? `${s.burger_menu} ${s.burger_menu_active}` : s.burger_menu}>
                <ul>
                    <li className={s.burger_profile}>
                        <Link to='profile'>
                            <img className={`${s.burger_profile_img} ${s.burger_img_el}`} src={require('../../../assets/layout/header/Frame 7.svg').default} alt=""/>
                            <div className={s.burger_profile_info}>
                                <p className={s.burger_profile_name}>Ugur Abbasov</p>
                                <p className={s.burger_profile_posts}>You have 0 posts</p>
                            </div>
                        </Link>
                    </li>
                    <li className={s.burger_lang}>
                        <svg className={s.burger_img_el} width="34" height="34" viewBox="0 0 34 34" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.8175 11.66H9.01583M16.9167 9V11.66M20.875 11.6283C20.875 18.4367 15.555 23.9467 9 23.9467" stroke="#FF8A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.8331 23.9467C21.9831 23.9467 19.4497 22.4267 17.6289 20.0358" stroke="#FF8A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0833 32.6667H21.5833C29.5 32.6667 32.6667 29.5 32.6667 21.5833V12.0833C32.6667 4.16667 29.5 1 21.5833 1H12.0833C4.16667 1 1 4.16667 1 12.0833V21.5833C1 29.5 4.16667 32.6667 12.0833 32.6667Z" stroke="#FF8A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>System language</p>
                    </li>
                    <li className={s.burger_create}>
                        <Link to='create_post'>
                            <svg className={s.burger_img_el} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 17.8156V22.5031H4.6875L18.5125 8.67812L13.825 3.99063L0 17.8156ZM22.1375 5.05312C22.625 4.56563 22.625 3.77813 22.1375 3.29063L19.2125 0.365625C18.725 -0.121875 17.9375 -0.121875 17.45 0.365625L15.1625 2.65312L19.85 7.34062L22.1375 5.05312Z" fill="#FF8A00"/>
                            </svg>
                            <p>Create post</p>
                        </Link>
                    </li>
                    <li className={s.burger_notifications}>
                        <Link to='notifications'>
                            <div className={`${s.burger_notifications_img} ${s.burger_img_el}`}>
                                {
                                    length
                                        ?
                                        <span className={s.notifications_length}>{length}</span>
                                        :
                                        null
                                }
                                <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0283 3.1225C8.33917 3.1225 4.52834 6.93333 4.52834 11.6225V15.7167C4.52834 16.5808 4.16 17.8983 3.72084 18.635L2.09167 21.3408C1.08584 23.0125 1.78 24.8683 3.62167 25.4917C9.7275 27.5317 16.315 27.5317 22.4208 25.4917C24.135 24.925 24.8858 22.8992 23.9508 21.3408L22.3217 18.635C21.8967 17.8983 21.5283 16.5808 21.5283 15.7167V11.6225C21.5283 6.9475 17.7033 3.1225 13.0283 3.1225Z" stroke="#FF8A00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                    <path d="M15.6491 3.53332C13.936 3.04541 12.1206 3.04541 10.4075 3.53332C10.8183 2.48499 11.8383 1.74832 13.0283 1.74832C14.2183 1.74832 15.2383 2.48499 15.6491 3.53332Z" stroke="#FF8A00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.2783 26.0017C17.2783 28.3392 15.3658 30.2517 13.0283 30.2517C11.8667 30.2517 10.79 29.77 10.025 29.005C9.22904 28.2079 8.78086 27.1282 8.77832 26.0017" stroke="#FF8A00" stroke-width="1.5" stroke-miterlimit="10"/>
                                </svg>
                            </div>
                            <p>Notifications</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={() => setActiveBurger(false)} className={isActiveBurger ? `${s.back_burger} ${s.active_back_burger}` : s.back_burger}></div>
        </header>
    )
}