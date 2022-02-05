import React from 'react'
import styles from './users.module.css'
import userPhoto from "../../assets/img/default_user.png"
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.round(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let page = 1; page <= pagesCount; page++) {
        pages.push(page);
    }

    return <div className={styles.users}>
        {pages.map(page => {
            return <span className={props.currentPage === page ? styles.selectedPage : styles.notSelectedPage}
                         onClick={() => {
                             props.onPageChange(page)
                         }}>{page}</span>
        })}

        {props.users.map(user => <div key={user.id}>
            <div className={styles.userBlock}>
                <div className={styles.leftBlock}>
                    <NavLink to='/profile'><img src={user.photos.small != null ? user.photos.small : userPhoto}
                                                alt="user photo"
                                                className={styles.userImg}/></NavLink>
                    <div className={styles.subscribe}>

                        {user.followed ?
                            <button className={styles.button} onClick={() => {props.unfollow(user.id)}}>
                                Unfollow
                            </button>
                            :<button className={styles.button} onClick={() => {props.follow(user.id)}}>
                                Follow
                            </button>}
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <NavLink to='/profile'>
                        <div className={styles.userName}>
                            {user.name}
                        </div>
                    </NavLink>
                    <div className={styles.country}>
                        {/*{user.location != undefined ? user.location.country : 'no country'}*/}
                        no country
                    </div>


                </div>
            </div>
        </div>)}
    </div>
}


export default Users;