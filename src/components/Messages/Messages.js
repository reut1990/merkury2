import React, { Component } from 'react'
import '../../assets/BottomBoards.css'
import List from '../List/List'
import MessagePreview from '../MessagePreview/MessagePreview'

class Messages extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        const messages = [{
            _id: 22,
            sender: 'Nina Jones',
            img:'https://i.imgur.com/BdheyF0.png',
            timeSent:[2018, 12, 27, 21, 48, 30, 0],
            messageContent: 'Hey You! It’s me again :-) I attached new (...)',
            messageRead:true
        },
        {
            _id: 23,
            sender: 'Nina Jones',
            img:'https://i.imgur.com/BdheyF0.png',
            timeSent:[2018, 12, 27, 1, 48, 30, 0],
            messageContent: 'Hey! I attached some new PSD files for (...)',
            messageRead:true
        },
        {
            _id: 24,
            sender: 'James Smith',
            img:'https://i.imgur.com/EGhitPe.png',
            timeSent:[2018, 12, 25, 21, 48, 30, 0],
            messageContent: 'Good morning, you are Hired!',
            messageRead:false
        },
        {
            _id: 25,
            sender: 'Nina Jones',
            img:'https://i.imgur.com/BdheyF0.png',
            timeSent:[2018, 12, 11, 21, 48, 30, 0],
            messageContent: 'Hello! Can you help me please?',
            messageRead:false
        },
        {
            _id: 26,
            sender: 'James Smith',
            img:'https://i.imgur.com/EGhitPe.png',
            timeSent:[2018, 12, 21, 21, 48, 30, 0],
            messageContent: 'Good morning, Come and Work With Me!',
            messageRead:false
        }]
        let unReadMessages=0;
        messages.forEach(message=>{
            if (!message.messageRead) unReadMessages++;
        })
        this.setState({ messages, unReadMessages });
    }

    render() {

        return (
            <section className="container">
                <header>
                    <h1 className="title">Messages</h1>
                    <div className="circles" ><p className="blue-circle">{this.state.unReadMessages}</p></div>
                </header>
                <List list={this.state.messages} CmpPreviewName={MessagePreview}  />
            </section>
        )
    }
}

export default Messages