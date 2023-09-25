import { useState } from 'react'
import './index.scss'

import DefaultLayout from '@/layouts/DefaultLayout'
import OrderList from './OrderList'
import Summary from './Summary'
import  useCart  from '@/hooks/useCart'
function Cart() {
  const { cart, calcTotalNumber, calcTotalPrice } = useCart()
  return (
    <div className='Cart'>
      <DefaultLayout>
        <div className="card">
          <div className="row">
            <OrderList cart={cart} />
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
