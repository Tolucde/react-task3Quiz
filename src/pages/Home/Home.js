import React from 'react'
import styles from './home.module.scss'
import ShortQuestion from '../../components/ShortQuestion/ShortQuestion'
import LongQuestion from '../../components/LongQuestion/LongQuestion'
import MultipleSelect from '../../components/MultipleSelect/MultipleSelect'
import MultipleChoice from '../../components/MultipleChoice/MultipleChoice'
import { useGlobalContext } from '../../context'
import FinishedComponent from '../../components/FinishedComponent/FinishedComponent'
import Description from '../../components/Description/Description'
import TrueFalse from '../../components/TrueFalse/TrueFalse'
const Home = () => {
  const [responses, setResponses] = React.useState([])
  const {
    currentQuestion,
    setCurrentQuestion,
    quizQuestions,
    quizFinished,
    setQuizFinished,
    setQuizQuestions,
  } = useGlobalContext()
  console.log(quizQuestions)

  const handleNextQuestion = () => {
    setCurrentQuestion((current) => current + 1)
  }
  const handlePrevQuestion = () => {
    setCurrentQuestion((current) => current - 1)
  }
  const handleSubmitAnswers = () => {
    setResponses(quizQuestions.map((answer) => answer.correct_answer))
    setQuizFinished(true)
  }

  return (
    <div className={styles.home}>
      {quizFinished ? (
        <FinishedComponent quiz={quizQuestions} responses={responses} />
      ) : (
        <>
          <div className={styles.container}>
            {quizQuestions[currentQuestion].id === 1 && (
              <ShortQuestion quiz={quizQuestions[0]} />
            )}
            {quizQuestions[currentQuestion].id === 2 && (
              <MultipleChoice quiz={quizQuestions[1]} />
            )}
            {quizQuestions[currentQuestion].id === 3 && (
              <MultipleSelect quiz={quizQuestions[2]} />
            )}
            {quizQuestions[currentQuestion].id === 4 && (
              <LongQuestion quiz={quizQuestions[3]} />
            )}
            {quizQuestions[currentQuestion].id === 5 && (
              <Description quiz={quizQuestions[4]} />
            )}
            {quizQuestions[currentQuestion].id === 6 && (
              <TrueFalse quiz={quizQuestions[5]} />
            )}

            {/* <ShortQuestion /> */}
            {/* <MultipleChoice />
        <MultipleSelect />
        <LongQuestion /> */}
          </div>
          <div className={styles.controls}>
            {quizQuestions[currentQuestion].id !== 1 && (
              <button
                onClick={() => handlePrevQuestion()}
                className={styles.prev}
              >
                Previous
              </button>
            )}

            {quizQuestions[currentQuestion].id === 6 ? (
              <button onClick={handleSubmitAnswers} className={styles.submit}>
                Submit
              </button>
            ) : (
              <button
                onClick={() => handleNextQuestion()}
                className={styles.next}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Home
