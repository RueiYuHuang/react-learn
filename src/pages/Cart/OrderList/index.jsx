import ProductItem from './ProductItem'
import { Link } from "react-router-dom";

function OrderList({ cart, setCart }) {
  // 更新products
  // params:
  // id 目前要更新的資料id
  // valueObject: object  ex. { count:3 }
  const updateCount = (id, valueObject) => {
    const newCart = cart.map((v2, i2) => {
      return id === v2.id ? { ...v2, ...valueObject } : { ...v2 }
    })

    setCart(newCart)
  }

  // params: id 目前要刪除的資料id
  const deleteProduct = (id) => {
    // 刪除這個id的資料 相當於 回傳一個新的陣列不包含此id的資料
    setCart(cart.filter((v2, i2) => id !== v2.id))
  }

  return (
    <div className='OrderList'>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {cart.length} items
            </div>
          </div>
        </div>
        {cart.map((v, i) => {
          const { id, name, price, img, count } = v

          return (
            <ProductItem
              key={id}
              name={name}
              price={price}
              img={img}
              count={count}
              updateCount={updateCount}
              id={id} // updateCount需要id
              deleteProduct={deleteProduct}
              // setCount={(newCount) => {
              //   updateCount(id, { count: newCount })
              // }}
              // setCount={(newCount) => {
              //   // 相當於更新物件陣列中其一的資料
              //   const newProducts = products.map((v2, i2) => {
              //     return id === v2.id ? { ...v2, count: newCount } : { ...v2 }
              //   })

              //   setProducts(newProducts)
              // }}
            />
          )
        })}

        <div className="back-to-shop">
          <Link to='/shop' className="text-muted">Back to shop</Link>
        </div>
      </div>
    </div>
  )
}

export default OrderList
