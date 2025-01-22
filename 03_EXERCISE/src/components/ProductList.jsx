import React from 'react'

const ProductList = () => {

    const products = [
        {id: 1, name:"Phone", price:699},
        {id: 2, name:"Laptop", price:1200},
        {id: 3, name:"Headphones", price:199}
    ]
  return (
    <div>
      { products.map(prod => (
        <ul key={prod.id}>
            <li>Name: {prod.name}</li>
            <li>Price: ${prod.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductList
