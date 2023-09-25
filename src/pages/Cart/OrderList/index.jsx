import ProductItem from './ProductItem'
import { Link } from "react-router-dom";

function OrderList({ cart }) {
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
              id={id} 
              key={`id${id}`}
              name={name}
              price={price}
              img={img}
              count={count}
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
