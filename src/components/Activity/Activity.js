import React, { Component } from 'react'
import '../../assets/BottomBoards.css'
import List from '../List/List'
import ActivityPreview from '../ActivityPreview/ActivityPreview'

class Activity extends Component {

    state = {
        activities: []
    }

    componentDidMount() {
        const activities = [{
            _id: 32,
            activityOf: 'Nina Jones',
            img: 'https://i.imgur.com/BdheyF0.png',
            timeSent: [2018, 12, 27, 21, 48, 30, 0],
            activity: 'added a new project',
            activityOn: 'Free UI Kit'

        },
        {
            _id: 33,
            activityOf: 'James Smith',
            img: 'https://i.imgur.com/EGhitPe.png',
            timeSent: [2018, 12, 27, 1, 11, 30, 0],
            activity: 'commented project',
            activityOn: 'Free PSD template'
        },
        {
            _id: 34,
            activityOf: 'Alex Clooney',
            img: 'https://i.imgur.com/CNljDDG.png',
            timeSent: [2018, 12, 25, 16, 48, 30, 0],
            activity: 'completed task',
            activityOn: 'Symu Website'
        },
        {
            _id: 35,
            activityOf: 'Alexandra Spears',
            img: 'https://i.imgur.com/1dGxBJ6.png',
            timeSent: [2018, 12, 11, 15, 48, 30, 0],
            activity: 'added a new project',
            activityOn: 'Free PSD (...)'
        },
        {
            _id: 36,
            activityOf: 'James Smith',
            img: 'https://i.imgur.com/EGhitPe.png',
            timeSent: [2018, 12, 21, 19, 48, 30, 0],
            activity: 'added a new project',
            activityOn: 'Gimbory'
        },
        {
            _id: 37,
            activityOf: 'Alex Clooney',
            img: 'https://i.imgur.com/CNljDDG.png',
            timeSent: [2018, 12, 25, 18, 48, 30, 0],
            activity: 'completed task',
            activityOn: 'LoliPop Website'
        },
        {
            _id: 38,
            activityOf: 'James Smith',
            img: 'https://i.imgur.com/EGhitPe.png',
            timeSent: [2018, 12, 27, 14, 48, 30, 0],
            activity: 'commented project',
            activityOn: 'The big one'
        },
        {
            _id: 39,
            activityOf: 'Alexandra Spears',
            img: 'https://i.imgur.com/1dGxBJ6.png',
            timeSent: [2018, 12, 11, 22, 48, 30, 0],
            activity: 'added a new project',
            activityOn: 'Big Bang Theory'
        },
        {
            _id: 40,
            activityOf: 'James Smith',
            img: 'https://i.imgur.com/EGhitPe.png',
            timeSent: [2018, 12, 21, 13, 48, 30, 0],
            activity: 'commented project',
            activityOn: 'Young Sheldon'
        },
        {
            _id: 41,
            activityOf: 'Alex Clooney',
            img: 'https://i.imgur.com/CNljDDG.png',
            timeSent: [2018, 12, 25, 20, 48, 30, 0],
            activity: 'completed task',
            activityOn: 'Trees'
        }

        ]
        this.setState({ activities });
    }

    render() {

        return (
            <section className="container">
                <div className="timeline">
                    <header>
                        <h1 className="title">Activity</h1>
                        <div className="circles" ><p className="blue-circle">{this.state.activities.length}</p> </div>
                    </header>
                    <List list={this.state.activities} CmpPreviewName={ActivityPreview} />
                </div>

            </section>
        )
    }
}

export default Activity