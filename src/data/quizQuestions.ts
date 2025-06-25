import { QuizQuestion, RiasecType } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'I enjoy working with my hands to build or repair things.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Realistic: 2 },
      'Agree': { Realistic: 1 },
      'Neutral': {},
      'Disagree': { Realistic: -1 },
      'Strongly Disagree': { Realistic: -2 }
    }
  },
  {
    id: 'q2',
    text: 'I love solving complex puzzles and analyzing data to find patterns.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Investigative: 2 },
      'Agree': { Investigative: 1 },
      'Neutral': {},
      'Disagree': { Investigative: -1 },
      'Strongly Disagree': { Investigative: -2 }
    }
  },
  {
    id: 'q3',
    text: 'Creative expression and artistic projects energize me.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Artistic: 2 },
      'Agree': { Artistic: 1 },
      'Neutral': {},
      'Disagree': { Artistic: -1 },
      'Strongly Disagree': { Artistic: -2 }
    }
  },
  {
    id: 'q4',
    text: 'I feel fulfilled when helping others solve their problems.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Social: 2 },
      'Agree': { Social: 1 },
      'Neutral': {},
      'Disagree': { Social: -1 },
      'Strongly Disagree': { Social: -2 }
    }
  },
  {
    id: 'q5',
    text: 'I thrive in leadership roles and enjoy persuading others.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Enterprising: 2 },
      'Agree': { Enterprising: 1 },
      'Neutral': {},
      'Disagree': { Enterprising: -1 },
      'Strongly Disagree': { Enterprising: -2 }
    }
  },
  {
    id: 'q6',
    text: 'I prefer organized, structured work environments with clear procedures.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Conventional: 2 },
      'Agree': { Conventional: 1 },
      'Neutral': {},
      'Disagree': { Conventional: -1 },
      'Strongly Disagree': { Conventional: -2 }
    }
  },
  {
    id: 'q7',
    text: 'Which scenario appeals to you more?',
    type: 'choice',
    options: ['Design a sustainable building', 'Research climate change solutions'],
    mapping: {
      'Design a sustainable building': { Artistic: 1, Realistic: 1 },
      'Research climate change solutions': { Investigative: 2, Social: 1 }
    }
  },
  {
    id: 'q8',
    text: 'I enjoy conducting experiments and testing theories.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Investigative: 2 },
      'Agree': { Investigative: 1 },
      'Neutral': {},
      'Disagree': { Investigative: -1 },
      'Strongly Disagree': { Investigative: -2 }
    }
  },
  {
    id: 'q9',
    text: 'Which work environment sounds more appealing?',
    type: 'choice',
    options: ['A bustling startup office', 'A quiet research laboratory'],
    mapping: {
      'A bustling startup office': { Enterprising: 2, Social: 1 },
      'A quiet research laboratory': { Investigative: 2, Realistic: 1 }
    }
  },
  {
    id: 'q10',
    text: 'I enjoy creating visual designs, writing, or performing arts.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Artistic: 2 },
      'Agree': { Artistic: 1 },
      'Neutral': {},
      'Disagree': { Artistic: -1 },
      'Strongly Disagree': { Artistic: -2 }
    }
  },
  {
    id: 'q11',
    text: 'I prefer to work independently rather than in teams.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Realistic: 1, Investigative: 1, Artistic: 1 },
      'Agree': { Realistic: 1, Investigative: 1 },
      'Neutral': {},
      'Disagree': { Social: 0.5 },
      'Strongly Disagree': { Social: 1, Enterprising: 1 }
    }
  },
  {
    id: 'q12',
    text: 'Which activity sounds more interesting?',
    type: 'choice',
    options: ['Teaching a workshop to help others learn', 'Developing a new mobile app'],
    mapping: {
      'Teaching a workshop to help others learn': { Social: 2, Enterprising: 1 },
      'Developing a new mobile app': { Investigative: 2, Artistic: 1 }
    }
  },
  {
    id: 'q13',
    text: 'I enjoy managing budgets, schedules, and administrative tasks.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Conventional: 2 },
      'Agree': { Conventional: 1 },
      'Neutral': {},
      'Disagree': { Conventional: -1 },
      'Strongly Disagree': { Conventional: -2 }
    }
  },
  {
    id: 'q14',
    text: 'I am energized by networking and building business relationships.',
    type: 'likert',
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    mapping: {
      'Strongly Agree': { Enterprising: 2 },
      'Agree': { Enterprising: 1 },
      'Neutral': {},
      'Disagree': { Enterprising: -1 },
      'Strongly Disagree': { Enterprising: -2 }
    }
  },
  {
    id: 'q15',
    text: 'Which career path sounds more appealing?',
    type: 'choice',
    options: ['Marine biologist studying ocean ecosystems', 'Interior designer creating beautiful spaces'],
    mapping: {
      'Marine biologist studying ocean ecosystems': { Investigative: 2, Realistic: 1 },
      'Interior designer creating beautiful spaces': { Artistic: 2, Enterprising: 1 }
    }
  }
];