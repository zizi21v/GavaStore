import React, { useEffect, useState } from 'react';
import { ProductsCards } from './ProductsCard';
import { Allproducts } from '../Categorias/Data/Categories';
import "./Products.css"

export const Products = () => {
 
  const[url, seturl]= useState ("")
  useEffect (()=> {seturl(window.location.href.split('/').reverse()[0])},[])
  
  

  return (

  <div className='ProductCard'>
    {Allproducts.map((product)=> product.id === parseInt(url) ? (
                        <ProductsCards 
                        key={product.id}
                        data={product}

                        />
    ): null )}

  </div>
  )
};