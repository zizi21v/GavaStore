import React from 'react';
import { Tops } from '../Categorias/Tops';
import { ProductsCards } from './ProductsCard';

export const Products = () => {
  const url = window.location.href.split('/').reverse()[0]
  const products = Tops[url]
  

  return (
  <div className='containerCards'>
    {products.productos.map((productos) => (
                        <ProductsCards 
                        key={productos.id}
                        name={productos.name}
                        image={productos.img}
                        price={productos.price}
                        size={productos.size}
                        care={productos.care}
                        material= {productos.material}

                        />
    ))}

  </div>
  )
};