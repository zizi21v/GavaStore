import React from 'react';
import { Categories } from './Data/Categories';
import { Cards } from './CardCategories';

export const ProductsList = () => {
  const url = window.location.href.split('/').reverse()[0]
  const products = Categories[url]
  console.log (url)
  

  return (
  <div className='containerCards'>
    {products.productos.map((productos) => (
                        <Cards
                        key={productos.id}
                        data= {productos}
                        
                      
                        />
    ))}
  </div>
  )
};
