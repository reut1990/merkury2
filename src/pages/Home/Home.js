import React from 'react'
import './Home.css'
import Sales from '../../components/Sales/Sales'
import Report from '../../components/Report/Report';
import Tasks from '../../components/Tasks/Tasks';
import Messages from '../../components/Messages/Messages'
import Activity from '../../components/Activity/Activity'

const Home= () => { 

  return (
      <section className="home-container">
        <h1 className="main-title">Hello Reut!</h1>
        <div className="cmps-home-container">
          <Sales />
          <Report />
          <Tasks />
          <Messages/>
          <Activity/>
        </div>
      </section>
    )
  
}

export default Home