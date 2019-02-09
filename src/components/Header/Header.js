import React, { Component } from 'react'
import './Header.css'

import menu from '../../assets/img/Menu.png'
import search from '../../assets/img/Search.png'
import messages from '../../assets/img/Messages.png'
import user from '../../assets/img/user.png'
import down from '../../assets/img/downArrow.png'
import plus from '../../assets/img/plus.png'
import notifications from '../../assets/img/Notifications.png'
import leftArrow from '../../assets/img/left-arrow.png'

export default class Header extends Component {
    
    state={
        on:false,
        class:''
    }

    toggle=()=>{
      this.setState({
          on:!this.state.on
      })
      this.props.toggleSideNavbar();
     
      if(this.state.on) this.setState({class:'transition'})
      else this.setState({class:''})
    }

    render() {

        return (
            <nav className="header-container">
                <ul className="left-header">
                   <li className="side-manu-btn"> {this.state.on && <img className={`left-arrow ${this.state.class}` }  src={leftArrow} alt="left-arrow" />}
                    <img onClick={this.toggle} src={menu} alt="menu" /></li>
                    <li><img src={search} alt="search" /></li>
                </ul>
                <ul className="right-header">
                    <li className="add-project-btn">
                        <img src={plus} alt="plus" />
                        <h6>Add project</h6>
                    </li>
                    <li><img src={messages} alt="messages" /></li>
                    <li><img src={notifications} alt="notifications" /></li>
                    <li className="user-area">
                        <img className="user-img" src={user} alt='user-img' />
                        <img src={down} alt='down-arrow' />
                    </li>
                </ul>
            </nav>
        )
    }
}
