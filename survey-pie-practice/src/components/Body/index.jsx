function Body({ questionType }) {
  let InputComponent = null
  if (questionType === 'text') {
    InputComponent = <input type="text"></input>
  } else if (questionType === 'textarea') {
    InputComponent = <textarea name="" id=""></textarea>
  }
  return (
    <>
      <div className="Body">{InputComponent}</div>
    </>
  )
}

export default Body
