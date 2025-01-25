import { useState } from 'react'

import ProgressIndicator from './components/ProgressIndicator'
import QuestionBox from './components/QuestionBox'

function App() {
  const [questions, setQuestions] = useState([
    {
      questionTitle: 'title1',
      questionDesc: 'desc1',
      questionType: 'text'
    },
    {
      questionTitle: 'title2',
      questionDesc: 'desc2',
      questionType: 'textarea'
    }
  ])

  const [step, setStep] = useState(0)

  const [answers, setAnswers] = useState([])

  return (
    <>
      <div className="app">
        <ProgressIndicator />
        <QuestionBox
          question={questions[step]}
          step={step}
          questionLength={questions.length}
          answer={answers[step]}
          setAnswer={newAnswer => {
            const newAnswers = [...answers]
            newAnswers[step] = newAnswer
            setAnswers(newAnswers)
          }}
        />
      </div>
    </>
  )
}

export default App
