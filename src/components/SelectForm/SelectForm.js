

import React from 'react'
import './SelectForm.css'
import arrow from '../../assets/img/arrow.png'

const SelectForm = () => {

    return (
        <form>
            <label>
                Period:
               <select className="select">
                    <option defaultValue value="last-year">Last Year</option>
                    <option value="last-month">Last Month</option>
                    <option value="last-Week">Last Week</option>
                </select>
                <img src={arrow} alt="arrow"/>
            </label>

        </form>
    )
}

export default SelectForm

