import React from 'react'
import "./06-product-card.scss"
function ProductCard(props) {
  return (
    <div className='product-card'>
        {props.name}
        {props.children}

    </div>
  )
}

export default ProductCard