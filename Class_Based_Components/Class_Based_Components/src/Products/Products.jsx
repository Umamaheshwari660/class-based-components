import React, { Component } from 'react'
import p_Data from '../Comps/NavBar/Data'
import Products from "../Product/Product";

export default class Products extends Component {
  render() {
    return (
      <div>
        {p_Data.map((product)=>{
 return(
            <>
            {/* <h1>{product.title}</h1> */}
            <product singleproduct={product}/>
            </>
)
        })}
      </div>
    )
  }
}
