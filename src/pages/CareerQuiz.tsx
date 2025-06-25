import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import QuizLanding from '../components/quiz/QuizLanding';
import QuizQuestion from '../components/quiz/QuizQuestion';
import QuizResults from '../components/quiz/QuizResults';

const CareerQuiz: React.FC = () => {
  const {
    quizState,
    currentQuestion,
    totalQuestions,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuiz,
    resetQuiz,
    getCurrentAnswer,
    progress
  } = useQuiz();

  const [hasStarted, setHasStarted] = React.useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleNext = () => {
    if (quizState.currentQuestion === totalQuestions - 1) {
      completeQuiz();
    } else {
      nextQuestion();
    }
  };

  const handleRestart = () => {
    resetQuiz();
    setHasStarted(false);
  };

  // Show landing page if not started
  if (!hasStarted) {
    return <QuizLanding onStart={handleStart} />;
  }

  // Show results if quiz is complete
  if (quizState.isComplete && quizState.result) {
    return <QuizResults result={quizState.result} onRestart={handleRestart} />;
  }

  // Show current question
  return (
    <QuizQuestion
      question={currentQuestion}
      currentAnswer={getCurrentAnswer()}
      onAnswer={answerQuestion}
      onNext={handleNext}
      onPrevious={previousQuestion}
      canGoNext={quizState.currentQuestion < totalQuestions - 1 || quizState.currentQuestion === totalQuestions - 1}
      canGoPrevious={quizState.currentQuestion > 0}
      progress={progress}
      questionNumber={quizState.currentQuestion + 1}
      totalQuestions={totalQuestions}
    />
  );
};

export default CareerQuiz;