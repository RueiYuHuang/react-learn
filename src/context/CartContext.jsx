import { createContext, useReducer } from "react";
import CartReducer, {initialState, ACTIONS} from "../reducer/CartReducer";
export const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [carts, dispatch] = useReducer(CartReducer, initialState)

  // 新增商品至購物車
  const addToCart = (newProduct) => {
    const newCarts = [...carts, {...newProduct, count: 1}]
    dispatch({type: ACTIONS.ADD_TO_CART, payload: newCarts})
  }

  // 修改商品數量
  const updateCount = (id, count) => {
    console.log('id:', id)
    console.log('count:', count)
    const newCarts = carts.map((data) => {
      console.log(data)
      if (data.id = id){
        return {...data, count: data.count + count}
      }
      return data
    })
    console.log('newCarts', newCarts)
    dispatch({type: ACTIONS.UPDATE_COUNT, payload: newCarts})
  }

  // 刪除商品
  const deleteProduct = (id) => {
    const newCarts = carts.filter((data) => data.id !== id)
    dispatch({type: ACTIONS.DELETE_PRODUCT, payload: newCarts})
  }

  // 計算總數量(數量 累加)
  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < carts.length; i++) {
      total += carts[i].count
    }

    return total
  }

  // 計算總價(單價x數量 累加)
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < carts.length; i++) {
      total += carts[i].count * carts[i].price
    }

    return total
  }

  return (
    <CartContext.Provider
      value={{
        carts,
        addToCart,
        updateCount,
        deleteProduct,
        calcTotalNumber,
        calcTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};