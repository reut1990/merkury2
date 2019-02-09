import React from 'react'
import './SalePreview.css'
const SalePreview = (props) => {

    const liStyle = {
        color: props.sale.color
    }

    return (
        <li className="sale" style={liStyle}>
            <img src={props.sale.dotInColor} alt="dot"/> 
            {props.sale.name}
        </li>

    )

}

export default SalePreview