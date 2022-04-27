import React, { useState, useContext, useEffect } from 'react'
import quiz from './data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [quizQuestions, setQuizQuestions] = useState(quiz)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)

  return (
    <AppContext.Provider
      value={{
        quizQuestions,
        setQuizQuestions,
        currentQuestion,
        quizFinished,
        setQuizFinished,
        setCurrentQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
