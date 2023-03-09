import { useState } from 'react'
import './index.scss'

import DefaultLayout from '@/layouts/DefaultLayout'
import OrderList from './OrderList'
import Summary from './Summary'
import { useCart } from '@/utils/useCart'
function Cart() {
  const { products, setProducts, calcTotalNumber, calcTotalPrice } = useCart()
  return (
    <div className='Cart'>
      <DefaultLayout>
        <div className="card">
          <div className="row">
            <OrderList products={products} setProducts={setProducts} />
            <Summary
              totalNumber={calcTotalNumber()}
              totalPrice={calcTotalPrice()}
            />
          </div>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default Cart
