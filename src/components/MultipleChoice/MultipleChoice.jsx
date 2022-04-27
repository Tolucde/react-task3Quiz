import React from 'react'
import styles from './multipleChoice.module.scss'
const MultipleChoice = ({ quiz }) => {
  const handleInputAnswer = (e) => {
    quiz.correct_answer = e.target.value
    console.log(e.target.value)
  }

  const { question, answers } = quiz
  return (
    <article className={styles.multipleChoice}>
      <h2>{question}</h2>
      <div className={styles.answerContainer}>
        <select
          onChange={(e) => handleInputAnswer(e)}
          multiple
          size='3'
          className={styles.select}
        >
          {answers.map((answer) => (
            <option
              key={answer.id}
              value={answer.answer}
              className={styles.option}
            >
              {answer.answer}
            </option>
          ))}
        </select>
      </div>
    </article>
  )
}

export default MultipleChoice
