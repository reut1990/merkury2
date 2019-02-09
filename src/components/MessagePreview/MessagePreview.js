import React from 'react'
import './MessagePreview.css'
import ReactTimeAgo from 'react-time-ago'

import share from '../../assets/img/share.png'
import setting from '../../assets/img/setting2.png'

const MessagePreview = (props) => {

    const arrayOfTime=props.item.timeSent;
    const time=new Date(arrayOfTime[0],arrayOfTime[1],arrayOfTime[2],arrayOfTime[3],arrayOfTime[4],arrayOfTime[5],arrayOfTime[6])
  
    // In a real app -at the minute meesage is sent we activate new Date().
   // for the purpose of showing data in different time zones i Wrote the code above
    return (
        <li className="message-preview" style={props.item.messageRead ? {backgroundColor: '#f4f5f8'} : {backgroundColor:'#ffffff'}} >
            <img className="sender-img" src={props.item.img} alt="sender-img" />
            <p className="sender-name">{props.item.sender}<span><ReactTimeAgo date={time}/></span></p>
            <p className="message-content">{props.item.messageContent}</p>
            <div className="sub-buttons">
                <img src={share} alt="share" />
                <img className="setting-message" src={setting} alt="setting"/>
            </div>
        </li>

    )

}

export default MessagePreview