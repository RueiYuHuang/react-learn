import React, { useState, useEffect } from 'react'
import { useCart } from '@/utils/useCart'
const sampleData = [
  {
    id: 1,
    name: '灰色T-shirt',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg',
  },
  {
    id: 2,
    name: '黑色T-shirt',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg',
  },
  {
    id: 3,
    name: '咖啡色T-shirt',
    price: 300,
    img: 'https://i.imgur.com/1GrakTl.jpg',
  },
]

function ClassA() {
  const { cart, setCart } = useCart()
  const addToCart = (index) => {
    const findProduct = cart.find((data,index) => {
      return data.id === sampleData[index].id
    })
    if(findProduct !== undefined){
      alert('此商品已在購物車中') 
    }else{}
    const notAdded = cart.reduce((prev, next) => {
      console.log("123",prev)
      console.log("next",next)
      if(next.id === sampleData[index].id){
        return false
        console.log("123-1",prev)
      }
    },true)
    if(notAdded) {
      console.log("456")
      setCart([...cart,{...sampleData[index], count: 1}])
    }else {
      const newProducts = cart.map((v2, i2) => {
        return v2.id === sampleData[index].id  ? { ...v2, count: v2.count + 1 } : { ...v2 }
      })
      console.log("789")
      setCart(newProducts)
    }
    
  }
  // useEffect
  return (
    <>
      <div className='ClassA'>
        {sampleData.map((data,index) => {
          return (
            <div className='card' key={data.id}>
              <div className='img'><img src={data.img} alt="" /></div>
              <div className='title'>{data.name}</div>
              <div className='title'>NT${data.price}</div>
              <button className='add-btn' onClick={() => {addToCart(index)}}>Add to Cart</button>
            </div>
          )
        })}
      </div>
    </>
    
  )
}

export default ClassA