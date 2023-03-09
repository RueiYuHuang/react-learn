import React from 'react'
import './index.scss'
import DefaultLayout from '@/layouts/DefaultLayout'
import { Outlet, Link } from 'react-router-dom';

function Shop() {
  return (
    <div className='Shop'>
        <DefaultLayout>
            <h1>Shop page</h1>
            <ul className='nav'>
              <li className='item'><Link to='/shop/a'>ClassA</Link></li>
              <li className='item'><Link to='/shop/b'>ClassB</Link></li>
              <li className='item'><Link to='/shop/c'>ClassC</Link></li>
            </ul>
            <Outlet />
        </DefaultLayout>
    </div>
  )
}

export default Shop