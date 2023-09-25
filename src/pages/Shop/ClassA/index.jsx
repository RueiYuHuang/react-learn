import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '@/components/Loading'
import useCart from '@/hooks/useCart'

function ClassA() {
  const { addToCart, cart } = useCart()
  const [ products, setProducts ] = useState([])
  const [loading, setLoading] = useState(true)

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
                <button className='add-btn' onClick={() => {addToCart(data)}}>Add to Cart</button>
              </div>
            )
          })}
        </div>
        }
    </>
    
  )
}

export default ClassA