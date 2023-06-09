import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../product-card/product'
import products from "../../../assets/data/products.json"
function ProductList() {
  return (
    <Container className='mt-5'>
        <Row className='gy-4 justify-content-center'>
            {
                products.map((product)=>(
                    <Col key={product.id} md={6} lg={4} xl={3}>
                <Product {...product}/>
            </Col>
                ))
            }

            
        </Row>
    </Container>
  )
}

export default ProductList