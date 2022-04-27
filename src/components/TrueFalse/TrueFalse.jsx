import React from 'react'
import styles from './trueFalse.module.scss'
const TrueFalse = ({ quiz }) => {
  const { question } = quiz

  const handleInputAnswer = (e) => {
    quiz.correct_answer = e.target.value
  }

  return (
    <article className={styles.trueFalse}>
      <h2>{question}</h2>
      <div className={styles.answerContainer}>
        <select
          onChange={(e) => handleInputAnswer(e)}
          multiple
          className={styles.select}
        >
          <option value='True' className={styles.option}>
            True
          </option>
          <option value='False' className={styles.option}>
            False
          </option>
        </select>
      </div>
    </article>
  )
}

export default TrueFalse
