import React from 'react'
import { useCart } from '@/utils/useCart'
const sampleData = [
  {
    id: 1,
    name: '白色T-shirt',
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
  const { products, setProducts, calcTotalNumber, calcTotalPrice } = useCart()
  const addToCart = (index) => {
    // setProducts(...products, sampleData[index])
  }
  return (
    <>
      <div className='ClassA'>
        ClassA
        {sampleData.map((value,index) => {
          return (
            <div onClick={addToCart(index)}>
              <div>{value.id}</div>
              <div>{value.name}</div>
              <div>{value.price}</div>
              <div><img src={value.img} alt="" /></div>
            </div>
          )
        })}
      </div>
    </>
    
  )
}

export default ClassA