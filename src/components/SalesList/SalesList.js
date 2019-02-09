import React from 'react'
import SalePreview from '../SalePreview/SalePreview'
import './SalesList.css'
const SalesList=({sales})=>{
    const SalesList=sales ? (
       sales.map(sale=>{
        return(
              <SalePreview sale={sale} key={sale._id}/>
           )
       })
   ) :(
       <p> No Sales To show</p>
   )

   return(
       <ul className="sales-list">
         { SalesList}         
       </ul>
   )
}

export default SalesList
