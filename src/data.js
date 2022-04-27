const quiz = [
  {
    id: 1,
    type: 'short_text',
    question: 'Why is the sky blue?',
    answers: [],
    correct_answer: 0,
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'Why is the sky blue?',
    answers: [
      { id: 1, answer: 'Because of physics' },
      { id: 2, answer: 'Because that the way it always was' },
      { id: 3, answer: "I don't know" },
    ],
    correct_answer: 1,
  },
  {
    id: 3,
    type: 'choose_many_options',
    question: 'Why is the sky blue?',
    answers: [
      { value: 'Because of physics', label: 'Because of physics' },
      {
        label: 'Because that the way it always was',
      },
      { value: "I don't know", label: "I don't know" },
    ],
    correct_answer: 1,
  },
  {
    id: 4,
    type: 'long_text',
    question: 'Why is the sky blue?',
    answers: [],
    correct_answer: 0,
  },
  {
    id: 5,
    type: 'description',
    question: 'random text to show to the user',
    answers: [],
    correct_answer: 0,
  },
  {
    id: 6,
    type: 'true_false',
    question: 'Is the sky blue',
    answers: [],
    correct_answer: 2,
  },
]

export default quiz
