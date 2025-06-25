import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentAnswer?: string;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  progress: number;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentAnswer,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  progress,
  questionNumber,
  totalQuestions
}) => {
  const handleAnswerSelect = (answer: string) => {
    onAnswer(answer);
  };

  const handleNext = () => {
    onNext();
    // Scroll to top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    onPrevious();
    // Scroll to top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when component mounts (new question)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionNumber]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Question {questionNumber} of {totalQuestions}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  currentAnswer === option
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-4 flex-shrink-0 ${
                    currentAnswer === option
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {currentAnswer === option && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              canGoPrevious
                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext || !currentAnswer}
            className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
              canGoNext && currentAnswer
                ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>{questionNumber === totalQuestions ? 'Complete Quiz' : 'Next'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Skip Option */}
        <div className="text-center mt-4">
          <button
            onClick={() => handleAnswerSelect('Not Sure')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Not sure? Skip this question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;