function TextInput({ answer, setAnswer }) {
  return (
    <>
      <div className="TextInput">
        <input
          type="text"
          value={answer}
          onChange={e => {
            setAnswer(e.target.value)
          }}
        />
      </div>
    </>
  )
}

export default TextInput
