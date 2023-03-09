function Summary({ totalNumber = 0, totalPrice = 0 }) {
  return (
    <div className="Summary">
      <div className="column">
        <div>Summary
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div>
          <div>共 {totalNumber} 項目</div>
        </div>
        <div>
          <div>總價</div>
          <div>{totalPrice}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </div>
  )
}

export default Summary
