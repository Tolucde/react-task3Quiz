import React from 'react'
import Select from 'react-select'
import styles from './multipleSelect.module.scss'

const MultipleSelect = ({ quiz }) => {
  const [selectedAnswers, setSelectedAnswers] = React.useState([])
  const { question, answers } = quiz

  const handleSaved = (e) => {
    const updateAnswers = selectedAnswers.map((answered) => answered.value)
    quiz.correct_answer = updateAnswers
  }

  const handleChange = (selectedAnswers) => {
    setSelectedAnswers(selectedAnswers)
  }
  return (
    <article className={styles.multipleSelect}>
      <h2>{question}</h2>
      <div className='answerContainer'>
        <Select
          onBlur={handleSaved}
          isMulti
          value={selectedAnswers}
          name='answers'
          onChange={handleChange}
          options={answers}
        />
      </div>
    </article>
  )
}

export default MultipleSelect
