import React, {FC} from "react";
import s from "../MainPage.module.scss";
import {Types} from "../../../types/main-page/posts/types";
import {Link} from "react-router-dom";

export const Posts: FC = () => {

    const posts: Types.IPosts[] = [
        {
            id: 1,
            img: require('../../../assets/main-page/posts/bg-post/Снимок экрана 2023-07-18 в 15.38 1.svg').default,
            title: 'If you could choose only one tech stack for the rest of your life, what would you choose?',
            hashtags: [
                {
                    id: 1,
                    hashtag: '#webdev'
                },
                {
                    id: 2,
                    hashtag: '#webdev'
                },
                {
                    id: 3,
                    hashtag: '#webdev'
                },
                {
                    id: 4,
                    hashtag: '#webdev'
                },
                {
                    id: 5,
                    hashtag: '#webdev'
                },
            ],
            text: 'Make Database Studies Great Again!!!\n' +
                'Table Of Contents\n' +
                '1. Prologue\n' +
                '2. There\'s much more possibilities than MySQL\n' +
                '3. SQL vs NoSQL\n' +
                '4. Choose Wisely\n' +
                '5. The Coolest Database Paradigm\n' +
                '6. Final Considerations\n',
            author: {
                uId: 'KFHKd8sfy8',
                name: 'UgurAbb',
                photo: require('../../../assets/main-page/posts/profile/Ellipse 1.svg').default,
            },
            comments: [
                {
                    id: 1,
                    text: 'Пост хуйня блять',
                    author: {
                        name: 'Danil Sadkov',
                        photo: ''
                    },
                    date: 'july 14',
                    time: '21:35',
                }
            ],
            date: 'july 14',
            time: '21:30',
            reactions: [
                {
                    id: 1,
                    img: require('../../../assets/main-page/posts/smiles/image 3.svg').default
                },
                {
                    id: 2,
                    img: require('../../../assets/main-page/posts/smiles/image 41.svg').default
                },
                {
                    id: 3,
                    img: require('../../../assets/main-page/posts/smiles/image 43.svg').default
                },
            ]
        }
    ]

    return (
        <>
            <div className={s.filter_posts}>
                <label htmlFor='latest' className={s.latest_lab}>
                    <input checked type="radio" name='filter-input' id='latest'/>
                    <p>Latest</p>
                </label>
                <label htmlFor="top" className={s.top_lab}>
                    <input type="radio" name='filter-input' id='top'/>
                    <p>Top</p>
                </label>
            </div>
            <div className={s.posts_container}>
                {
                    posts.map(item => (
                        <div key={item.id} className={s.post}>
                            <img className={s.bg_post} src={item.img} alt=""/>
                            <div className={s.post_content}>
                                <Link to={'profile/'+item.author.uId} className={s.post_author}>
                                    <img className={s.author_photo} src={item.author.photo} alt=""/>
                                    <article className={s.author_date_info}>
                                        <p className={s.author_name}>{item.author.name}</p>
                                        <p className={s.author_post_date}>{item.date} <span>{item.time}</span></p>
                                    </article>
                                </Link>
                                <Link to={'post/'+item.id} className={s.post_title}>
                                    <p>{item.title}</p>
                                </Link>
                                <ul className={s.post_hashtags}>
                                    {
                                        item.hashtags.map(ite => (
                                            <li key={ite.id}><Link to={'hashtags/'+ite.id}>{ite.hashtag}</Link></li>
                                        ))
                                    }
                                </ul>
                                <div className={s.interaction_panel}>
                                    <div className={s.reactions}>
                                        <ul className={s.reaction_smiles}>
                                            {
                                                item.reactions.reverse().slice(0,3).map(ite => (
                                                    <li key={ite.id}><img src={ite.img} alt=""/></li>
                                                ))
                                            }
                                        </ul>
                                        <p>{item.reactions.length} reactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}