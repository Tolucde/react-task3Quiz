import React from 'react'
import styles from './finished.module.scss'
const FinishedComponent = ({ responses, quiz }) => {
  console.log(quiz)
  return (
    <article className={styles.finished}>
      <h1>HERE IS YOUR SUMMARY</h1>
      <div className={styles.container}>
        {quiz.map((response) => (
          <>
            <h3>Question: {response.question}</h3>
            <p>Answer: {response.correct_answer}</p>
          </>
        ))}
      </div>
    </article>
  )
}

export default FinishedComponent
