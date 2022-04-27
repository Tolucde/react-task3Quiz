import React from 'react'
import styles from './longQuestion.module.scss'
const LongQuestion = ({ quiz }) => {
  const { question } = quiz

  const handleInputAnswer = (e) => {
    quiz.correct_answer = e.target.value
  }

  return (
    <article className={styles.longQuestion}>
      <h2>{question}</h2>
      <div className={styles.answerContainer}>
        <textarea
          className={styles.longText}
          type='text'
          placeholder='Answer goes her.....'
          onChange={(e) => handleInputAnswer(e)}
          autoFocus
        />
      </div>
    </article>
  )
}

export default LongQuestion
