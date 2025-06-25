import { useState, useCallback } from 'react';
import { QuizState, QuizAnswer, RiasecScores, RiasecType, QuizResult } from '../types/quiz';
import { quizQuestions } from '../data/quizQuestions';
import { riasecCareerMapping, generatePersonalityCode, generateDescription } from '../data/riasecCareerMapping';

const initialScores: RiasecScores = {
  Realistic: 0,
  Investigative: 0,
  Artistic: 0,
  Social: 0,
  Enterprising: 0,
  Conventional: 0
};

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isComplete: false,
    result: null
  });

  const answerQuestion = useCallback((answer: string) => {
    const currentQ = quizQuestions[quizState.currentQuestion];
    const newAnswer: QuizAnswer = {
      questionId: currentQ.id,
      answer
    };

    setQuizState(prev => ({
      ...prev,
      answers: [...prev.answers.filter(a => a.questionId !== currentQ.id), newAnswer]
    }));
  }, [quizState.currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  }, [quizState.currentQuestion]);

  const previousQuestion = useCallback(() => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  }, [quizState.currentQuestion]);

  const calculateResults = useCallback((): QuizResult => {
    const scores = { ...initialScores };

    // Calculate scores based on answers
    quizState.answers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (question && question.mapping[answer.answer]) {
        const mapping = question.mapping[answer.answer];
        Object.entries(mapping).forEach(([type, value]) => {
          scores[type as RiasecType] += value || 0;
        });
      }
    });

    // Normalize scores to positive values and sort
    const minScore = Math.min(...Object.values(scores));
    if (minScore < 0) {
      Object.keys(scores).forEach(key => {
        scores[key as RiasecType] += Math.abs(minScore);
      });
    }

    // Get top 3 types
    const sortedTypes = (Object.entries(scores) as [RiasecType, number][])
      .sort(([, a], [, b]) => b - a)
      .map(([type]) => type);

    const top3 = sortedTypes.slice(0, 3);
    const personalityCode = generatePersonalityCode(top3);
    const description = generateDescription(top3);

    // Get career suggestions (mix from top 3 types)
    const suggestedCareers = [
      ...riasecCareerMapping[top3[0]].slice(0, 3),
      ...riasecCareerMapping[top3[1]].slice(0, 2),
      ...riasecCareerMapping[top3[2]].slice(0, 2)
    ];

    return {
      scores,
      top3,
      personalityCode,
      description,
      suggestedCareers
    };
  }, [quizState.answers]);

  const completeQuiz = useCallback(() => {
    const result = calculateResults();
    setQuizState(prev => ({
      ...prev,
      isComplete: true,
      result
    }));
  }, [calculateResults]);

  const resetQuiz = useCallback(() => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isComplete: false,
      result: null
    });
  }, []);

  const getCurrentAnswer = useCallback(() => {
    const currentQ = quizQuestions[quizState.currentQuestion];
    return quizState.answers.find(a => a.questionId === currentQ.id)?.answer;
  }, [quizState.currentQuestion, quizState.answers]);

  return {
    quizState,
    currentQuestion: quizQuestions[quizState.currentQuestion],
    totalQuestions: quizQuestions.length,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuiz,
    resetQuiz,
    getCurrentAnswer,
    progress: ((quizState.currentQuestion + 1) / quizQuestions.length) * 100
  };
};