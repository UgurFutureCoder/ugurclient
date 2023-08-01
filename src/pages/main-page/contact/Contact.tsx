import React, { useEffect, useState } from 'react'
import s from './Contact.module.scss'
import { Types } from '../../../types/main-page/posts/types';

export const Contact = () => {
    const [select, setSelect] = useState('Danil Sadkov');
    const [isActiveAc, setActiveAc] = useState(false);
    const admins: Types.IAd[] = [
        {
            id: 1,
            name: 'Danil Sadkov',
        },
        {
            id: 2,
            name: 'Ugur Abbasov',
        },
        {
            id: 3,
            name: 'Nikita Kuznetcov',
        },
    ]
    const [mapArr, setMapArr] = useState<Types.IAd[]>(admins.filter(item => item.name !== select))
    useEffect(() => {
        setMapArr(admins.filter(item => item.name !== select));
    }, [select])

    const setSelectFunc = (e: any): void => {
        setSelect(e.currentTarget.dataset.name);
        setActiveAc(false);
    }

  return (
    <div className={s.contact_container}>
        <p className={s.contact_header}>Contact form</p>
        <form className={s.contact_form} action="">
            <div className={s.inputs}>
                <div className={s.your_info}>
                    <div className={s.input_container}>
                        <p>Your name</p>
                        <input type="text" />
                    </div>
                    <div className={s.input_container}>
                        <p>Your email</p>
                        <input type="email" />
                    </div>
                </div>
                <div className={s.message_container}>
                    <p>Message</p>
                    <textarea cols={30} rows={10}></textarea>
                </div>
            </div>
            <div className={s.contact_bottom}>
                <div className={s.contact_setting}>
                    <p className={s.contact_title}>Send this message to</p>
                    <div className={s.accordion_admins}>
                        <p onClick={() => setActiveAc(!isActiveAc)} className={s.selected_admin}>{select} <img className={isActiveAc ? `${s.accordoin_gal} ${s.accordion_gal_active}` : s.accordoin_gal} src={require('../../../assets/main-page/contact/gal.svg').default} alt="" /></p>
                        <ul className={isActiveAc ? `${s.admins_list} ${s.admins_list_active}` : s.admins_list}>
                            {
                                mapArr.map(item => (
                                    <li onClick={(e) => setSelectFunc(e)} data-name={item.name} key={item.id} id={`${item.id}`}>
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <button className={s.send_message_button}>Send message</button>
            </div>
        </form>
    </div>
  )
}
