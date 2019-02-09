import React, { Component } from 'react'
import '../../assets/BottomBoards.css'
import List from '../List/List'
import TaskPreview from '../TaskPreview/TaskPreview'

class Tasks extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        const tasks = [{
            _id: 12,
            taskTitle: 'New website for Symu.co',
            submitDate: '2019-01-22',
        },
        {
            _id: 13,
            taskTitle: 'Business PSD Template',
            submitDate: '2019-01-25',
        },
        {
            _id: 14,
            taskTitle: 'New logo for JCD.pl',
            submitDate: '2019-02-05',
        },
        {
            _id: 15,
            taskTitle: 'New app for Miss Levin',
            submitDate: '2019-02-10',
        },
        {
            _id: 16,
            taskTitle: 'Free Icons Set vol. 3',
            submitDate: '2019-02-06',
        }]
        let delay = 0;
        tasks.map(task => {
            let days, timeForTask = '';
            let now = new Date(); now.setHours(0, 0, 0, 0);
            now = +Date.parse(now);
            const submitDate = +Date.parse(task.submitDate);
            if (submitDate < now) {
                days = (-1) * Math.round((submitDate - now) / (1000 * 60 * 60 * 24));
                timeForTask = days + ' days delays';
                delay+=1;
                task.submitDate=timeForTask;
                task.onTime=false;
            } else {
                days = Math.round((submitDate - now) / (1000 * 60 * 60 * 24));
                timeForTask = days + ' days left';
                task.submitDate=timeForTask;
                task.onTime=true;
            }
        })
        this.setState({ tasks, delay });
    }



    render() {
        return (
            <section className="container">
                <header>
                    <h1 className="title">Tasks</h1>
                    <div className="circles" ><p className="blue-circle">{this.state.tasks.length}</p><p className="pink-circle">{this.state.delay}</p> </div>
                </header>
                <List list={this.state.tasks} CmpPreviewName={TaskPreview}  />
            </section>
        )
    }
}

export default Tasks