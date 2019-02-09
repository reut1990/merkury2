import React, { Component } from 'react'
import '../../assets/topBoards.css'
import PieChart from '../../components/PieChart/PieChart'
import SalesList from '../../components/SalesList/SalesList'
import SelectForm from '../SelectForm/SelectForm'
class Sales extends Component {

  state = {
    sales: []
  }

  componentDidMount() {
    const sales = [{ _id: 1, name: 'Websites', dotInColor: 'https://i.imgur.com/XisaeAo.png' }, { _id: 2, name: 'Logo', dotInColor: 'https://i.imgur.com/pWIYnkB.png' }, { _id: 3, name: 'Social Media', dotInColor: 'https://i.imgur.com/2TF8ux1.png' }, { _id: 4, name: 'Adwords', dotInColor: 'https://i.imgur.com/UQxEsTC.png' }, { _id: 5, name: 'E-Commerce', dotInColor: 'https://i.imgur.com/epeMarL.png' }];
    this.setState({ sales })
  }

  render() {
    return (
      <section className="container-top-board">
        <h1 className="title-top-board">Your Sales</h1>
        <SelectForm />
        <div className="pieChart-container">
          <PieChart />
          <p>1560<br /><br /><span>Sales</span></p>
        </div>
        <SalesList sales={this.state.sales} />
      </section>
    )
  }
}

export default Sales