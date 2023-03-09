import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './index.scss'

function DefaultLayout({ children }) {
  return (
    <div className='DefaultLayout'>
      <Header />
      <div className='main'>{ children }</div>
      <Footer />
    </div>
    
  )
}

export default DefaultLayout