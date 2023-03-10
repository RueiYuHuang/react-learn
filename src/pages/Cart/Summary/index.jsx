function Summary({ totalNumber = 0, totalPrice = 0 }) {
  return (
    <div className="Summary">
      <div className="column">
        <div>Summary
          <h4>
            <b>付款摘要</b>
          </h4>
          <hr />
        </div>
        <div>
          <div>共 {totalNumber} 項目</div>
          <div>總價{totalPrice}</div>
          <button className="btn">前往付款</button>
        </div>
      </div>
    </div>
  )
}

export default Summary
