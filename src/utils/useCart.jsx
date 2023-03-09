import React, { useState, useContext, createContext } from 'react';

// 建立新的認証用的context
const CartContext = createContext();

// 建立一個新的Provider元件，內容是提供auth狀態
export const CartProvider = ({ children }) => {

  //購物車
  const [cart, setCart] = useState([])

  // 計算總數量(數量 累加)
  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count
    }

    return total
  }

  // 計算總價(單價x數量 累加)
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count * cart[i].price
    }

    return total
  }
  return (
      <CartContext.Provider
          value={{
            cart,
            setCart,
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