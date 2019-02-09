import React from 'react'
import './ActivityPreview.css'
import ReactTimeAgo from 'react-time-ago'
import clock from '../../assets/img/grayClock.png'

const ActivityPreview = (props) => {

    const arrayOfTime = props.item.timeSent;
    const time = new Date(arrayOfTime[0], arrayOfTime[1], arrayOfTime[2], arrayOfTime[3], arrayOfTime[4], arrayOfTime[5], arrayOfTime[6])
    // In a real app -at the minute meesage is sent we activate new Date().
    // for the purpose of showing data in different time zones i Wrote the code above

    return (
        <li className="activity-preview" >
            <img className="activeOf-img" src={props.item.img} alt="activeOf-img" />
            <div className="main-activity-container">
                <p className="activity-content">{props.item.activityOf}<span>{props.item.activity}</span>{props.item.activityOn}</p>
                <p><img src={clock} alt="clock" /><ReactTimeAgo date={time} /></p>
            </div>
        </li>

    )

}

export default ActivityPreview