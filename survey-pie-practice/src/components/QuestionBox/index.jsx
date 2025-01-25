import Body from '../Body'
import Description from '../Description'
import Title from '../Title'
import ActionButtons from '../ActionButtons'

function QuestionBox({ question, step, questionLength, answer, setAnswer }) {
  return (
    <>
      <div className="QuestionBox">
        <Title children={question.questionTitle}></Title>
        <Description children={question.questionDesc}></Description>
        <Body
          questionType={question.questionType}
          answer={answer}
          setAnswer={setAnswer}
        ></Body>
        <ActionButtons
          step={step}
          questionLength={questionLength}
        ></ActionButtons>
      </div>
    </>
  )
}

export default QuestionBox
