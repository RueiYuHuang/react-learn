import React, { useState, useContext, createContext } from 'react';

// 建立新的認証用的context
const CartContext = createContext();

// 建立一個新的Provider元件，內容是提供auth狀態
export const CartProvider = ({ children }) => {
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
  // 擴充product物件多一個count屬性
  const [products, setProducts] = useState(
    sampleData.map((v, i) => ({ ...v, count: 1 }))
  )

  // 計算總數量(數量 累加)
  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < products.length; i++) {
      total += products[i].count
    }

    return total
  }

  // 計算總價(單價x數量 累加)
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < products.length; i++) {
      total += products[i].count * products[i].price
    }

    return total
  }
  return (
      <CartContext.Provider
          value={{
            products,
            setProducts,
            calcTotalNumber,
            calcTotalPrice
          }}
      >
          {children}
      </CartContext.Provider>
  );
};

// 建立一個勾子協助使用context
export const useCart = () => useContext(CartContext);