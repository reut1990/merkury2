import React, { Component } from 'react'
import './assets/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import SideNavbar from './components/SideNavbar/SideNavbar'
import Home from './pages/Home/Home'


class App extends Component {

  state = {
    show: false
  }

  toggleSideNavbar = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Router>
        <div
          style={this.state.show ? { gridTemplateColumns: 'min-content auto'}: { gridTemplateColumns: '0px auto' }} className="app-container">
          <Header toggleSideNavbar={this.toggleSideNavbar} />
          {this.state.show &&
            <React.Fragment>
              <SideNavbar />
              <Route path="/home" exact component={Home} />
            </React.Fragment>
          }
        </div>
      </Router>
    );
  }
}

export default App;
