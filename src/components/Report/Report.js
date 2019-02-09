import React from 'react'
import '../../assets/topBoards.css'
import SelectForm from '../SelectForm/SelectForm'
import LineCharts from '../LineCharts/LineCharts'

const Report = () => {

  return (
    <section className="container-top-board">
      <h1 className="title-top-board">Report</h1>
      <SelectForm className="select" />
      <LineCharts />
    </section>
  )
}


export default Report