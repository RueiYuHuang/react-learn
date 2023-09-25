import { createContext, useReducer } from "react";
import CartReducer, {initialState, ACTIONS} from "../reducer/CartReducer";
export const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState)

  // 新增至購物車
  const addToCart = (newProduct) => {
    const findProduct = cart.find((data) => data.id == newProduct.id)
    if(findProduct === undefined){
      const newCart = [...cart, {...newProduct, count: 1}]
      dispatch({type: ACTIONS.ADD_TO_CART, payload: newCart})
      alert('加入購物車') 
    }else{
      alert('此商品已在購物車中') 
    }
  }

  // 修改商品數量
  const updateCount = (id, count) => {
    const newCart = cart.map((data) => data.id === id ? {...data, count: data.count + count} : {...data})
    dispatch({type: ACTIONS.UPDATE_COUNT, payload: newCart})
  }

  // 刪除商品
  const deleteProduct = (id) => {
    const newCart = cart.filter((data) => data.id !== id)
    dispatch({type: ACTIONS.DELETE_PRODUCT, payload: newCart})
  }

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