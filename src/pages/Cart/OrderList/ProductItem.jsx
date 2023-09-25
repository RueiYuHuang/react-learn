import useCart from "@/hooks/useCart"
const ProductItem = ({
  id,
  name,
  price,
  img,
  count,
}) => {
  const {updateCount, deleteProduct} = useCart()

  return (
    <div className="ProductItem">
      <div >
        <div className="row">
          <div >
            <img className="img" src={img} alt="" />
          </div>
          <div>
            <div >Shirt</div>
            <div >{name}</div>
          </div>
          <div>
            <span
              className="set_count"
              onClick={() => {
                if(count > 1) updateCount(id, -1)
              }}
            >
              -
            </span>
            <span className="count">{count}</span>
            <span
            className="set_count"
              onClick={() => {
                updateCount(id, 1)
              }}
            >
              +
            </span>
          </div>
          <div className="">
            ${price}
          </div>
          <div
            className="delete"
            onClick={() => {
              deleteProduct(id)
            }}
          >
            &#10005;
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
