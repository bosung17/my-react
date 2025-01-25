function ActionButtons({ step, questionLength }) {
  let button = (
    <div>
      <button>이전</button>
      <button>다음</button>
    </div>
  )
  if (step === 0) {
    button = <button>다음</button>
  }
  if (questionLength - 1 === step) {
    button = (
      <div>
        <button>이전</button>
        <button>제출</button>
      </div>
    )
  }

  return (
    <>
      <div className="ActionButtons">{button}</div>
    </>
  )
}

export default ActionButtons
