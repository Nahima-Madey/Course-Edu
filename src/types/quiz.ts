export type RiasecType = 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'likert' | 'choice';
  options: string[];
  mapping: Record<string, Partial<Record<RiasecType, number>>>;
}

export interface QuizAnswer {
  questionId: string;
  answer: string;
}

export interface RiasecScores {
  Realistic: number;
  Investigative: number;
  Artistic: number;
  Social: number;
  Enterprising: number;
  Conventional: number;
}

export interface QuizResult {
  scores: RiasecScores;
  top3: RiasecType[];
  personalityCode: string;
  description: string;
  suggestedCareers: string[];
}

export interface QuizState {
  currentQuestion: number;
  answers: QuizAnswer[];
  isComplete: boolean;
  result: QuizResult | null;
}