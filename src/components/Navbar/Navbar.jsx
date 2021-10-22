import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}> <NavLink activeClassName={s.active}  to='/profile'><div >Profile</div></NavLink></div>
        <div className={s.item}> <NavLink activeClassName={s.active}  to='/dialogs'><div >Messages</div></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to='/news'><div>News</div></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to='/music'><div>Music</div></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to='/settings'><div>Settings</div></NavLink></div>
    </nav>
}
export default Navbar