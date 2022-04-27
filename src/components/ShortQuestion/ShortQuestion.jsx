import React from 'react'
import styles from './shortQuestion.module.scss'
const ShortQuestion = ({ quiz }) => {
  const { question } = quiz

  const handleInputAnswer = (e) => {
    quiz.correct_answer = e.target.value
  }

  return (
    <article className={styles.shortQuestion}>
      <h2 className={styles.question}>{question}</h2>
      <form id='inputAnswer' className={styles.form}>
        <input
          type='text'
          onChange={(e) => handleInputAnswer(e)}
          placeholder='Daniel'
          autofocus
          required
        />
        {/* <button type='submit' onClick={() => handleSubmit()}>
          <p>Ok</p>
          <span>
            press
            <span> ENTER </span>
          </span>
        </button> */}
      </form>
    </article>
  )
}

export default ShortQuestion
