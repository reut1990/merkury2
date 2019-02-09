import React from 'react';
import { NavLink } from 'react-router-dom'
import './SideNavbar.css'
import logo from '../../assets/img/Logo.png'
import home from '../../assets/img/home.png'
import workflow from '../../assets/img/workflow.png'
import statics from '../../assets/img/statics.png'
import calender from '../../assets/img/calender.png'
import user from '../../assets/img/users.png'
import settings from '../../assets/img/setting.png'

const SideNavbar = () => {
   
    return (
        <nav className="nav-container"> 
           <div className="logo"><img  src={logo} alt="logo" /></div>
            <ul className="left-navbar">
                <NavLink to="/home" activeClassName="selected"><li><img src={home} alt=''/> Home</li></NavLink>
                <NavLink to='/workflow'activeClassName="selected"><li> <img src={workflow} alt=''/>Workflow</li></NavLink>
                <NavLink to='/statics' activeClassName="selected"><li><img src={statics} alt=''/>Statics</li></NavLink>
                <NavLink to='/calender' activeClassName="selected"><li><img src={calender} alt=''/>Calender</li></NavLink>
                <NavLink to='/users' activeClassName="selected"><li><img src={user} alt=''/>Users</li></NavLink>
                <NavLink to='/setting' activeClassName="selected"><li><img src={settings} alt=''/>Settings</li></NavLink>
            </ul>
        </nav>
    )
}
export default SideNavbar