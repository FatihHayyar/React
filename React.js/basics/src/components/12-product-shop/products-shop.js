import React from 'react'
import ProductHeader from './product-header/product-header'
import ProductList from './product-list/product-list'
import ProductFooter from './product-footer/product-footer'

function ProductsShop() {
  return (
    <div className='product-shop'>
        <ProductHeader/>
        <ProductList/>
        <ProductFooter/>
    </div>
  )
}

export default ProductsShop