

import axios from 'axios';
// import { products } from '../utils/data';
import Itemcard from './Itemcard';
import React, {useEffect, useState} from 'react';

const Body = () => {

  const [products, setProducts]= useState([{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
   
  }]);

  const getProducts=async()=>{
    const data= await axios.get('http://localhost:3000/products');
    setProducts(data.data);
  }
   
  useEffect(()=>{
     getProducts();
  },[]);


  const removeProduct= async(id)=>{
    const res= await axios.delete(`http://localhost:3000/products/${id}`);
    console.log(res);

    if(res.data._id){
     const filteredProducts= products.filter((p)=>p._id!==res.data._id);
     setProducts(filteredProducts);
    }

  }

  return (
    <div >
         <div className='flex flex-wrap ml-24 mr-20 '>
          {
            products.map((p,index)=>
              <Itemcard key={index} data={p} removeProduct={removeProduct} />
            
              
            )
          
          }
       
          </div>

    </div>
  )
}

export default Body;