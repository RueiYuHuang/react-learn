import React, { useState, useEffect } from 'react'
import { useCart } from '@/utils/useCart'
import axios from 'axios'
import Loading from '@/components/Loading'

function ClassA() {
  const { cart, setCart } = useCart()
  const [ products, setProducts ] = useState([])
  const [loading, setLoading] = useState(true)
  const addToCart = (index) => {
    const findProduct = cart.find((data2,index2) => {
      return data2.id == products[index].id
    })
    if(findProduct === undefined){
      setCart([...cart,{...products[index], count: 1}])
      alert('加入購物車') 
    }else{
      alert('此商品已在購物車中') 
    }
  }
  const fetchProducts = async () => {
    const data = await axios.get('https://mocki.io/v1/599dc586-e116-4d78-9d9f-50fce59a97eb')
    setProducts(data.data)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }
  useEffect(() => {
    fetchProducts()
  },[])
  useEffect(() => {
    console.log("render")
  })
  useEffect(() => { 
      console.log('This is like componentDidMount, cart:',cart)
    return () => {
      console.log('This is like componentWillUnmount, cart:',cart)
    }
  },[cart])
  return (
    <>
        {loading ? <Loading />
        :
        <div className='ClassA'>
          {products.map((data,index) => {
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
        }
    </>
    
  )
}

export default ClassA