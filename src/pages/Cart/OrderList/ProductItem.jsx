function ProductItem({
  name,
  price,
  img,
  count,
  //setCount,
  updateCount,
  id,
  deleteProduct,
}) {
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
                //setCount(count - 1)
                if(count > 1) updateCount(id, { count: count - 1 })
              }}
            >
              -
            </span>
            <span className="count">{count}</span>
            <span
            className="set_count"
              onClick={() => {
                //setCount(count + 1)
                updateCount(id, { count: count + 1 })
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
