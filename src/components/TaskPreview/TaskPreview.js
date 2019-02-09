import React from 'react'
import './TaskPreview.css'
import onTimeClock from '../../assets/img/grayClock.png'
import delayClock from '../../assets/img/pinkClock.png'
import options from '../../assets/img/Options.png'

const TaskPreview = (props) => {
    let iconText = props.item.taskTitle.substring(0, 1);
    return (
        <li className="task-preview" >
            <p className="task-icon">{iconText}</p>
            <div className="main-task-content">
                <h6>{props.item.taskTitle}</h6>
                <p>
                    {props.item.onTime ? <img src={onTimeClock} alt="clock" /> : <img src={delayClock} alt="clock" />}
                    <span style={props.item.onTime ? {color: '#c6ccda'} : {color:'#f83c7b'}}>{props.item.submitDate}</span>
                </p>
            </div>
            <img className="options" src={options} alt="options" />

        </li>

    )

}

export default TaskPreview