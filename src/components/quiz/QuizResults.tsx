import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, RefreshCw, Star, TrendingUp, Users } from 'lucide-react';
import { QuizResult } from '../../types/quiz';
import { careers } from '../../data/careers';
import { riasecDescriptions } from '../../data/riasecCareerMapping';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ result, onRestart }) => {
  const suggestedCareerDetails = result.suggestedCareers
    .map(careerId => careers.find(career => career.id === careerId))
    .filter(Boolean)
    .slice(0, 6);

  const handleEmailResults = () => {
    const subject = encodeURIComponent('My Career Quiz Results - CourseEdu');
    const body = encodeURIComponent(`
My Career Personality: ${result.personalityCode}

${result.description}

Top Career Matches:
${suggestedCareerDetails.map((career, index) => 
  `${index + 1}. ${career?.title} - ${career?.shortDescription}`
).join('\n')}

Discover more careers at CourseEdu!
    `);
    
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
            <Star className="h-4 w-4 text-green-500" />
            <span>Quiz Complete!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Career Style
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {result.personalityCode}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {result.top3.join(' • ')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>
        </div>

        {/* Personality Breakdown */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Personality Breakdown</h3>
          <div className="space-y-6">
            {result.top3.map((type, index) => (
              <div key={type} className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-blue-400' : 'bg-blue-300'
                }`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{type}</h4>
                  <p className="text-gray-600 leading-relaxed">{riasecDescriptions[type]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Suggestions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Perfect Career Matches</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestedCareerDetails.map((career, index) => (
              <div key={career?.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium mr-2">
                        #{index + 1} Match
                      </span>
                      {career?.featured && (
                        <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{career?.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {career?.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {career?.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                    <span>Excellent growth outlook</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Salary: {career?.salaryRange.local}</span>
                  </div>
                </div>

                <Link
                  to={`/career/${career?.id}`}
                  className="group flex items-center justify-between w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-xl transition-all duration-300 font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">What's Next?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={handleEmailResults}
              className="flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <Mail className="h-4 w-4" />
              <span>Email Results</span>
            </button>
            
            <Link
              to="/careers"
              className="flex items-center justify-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <ArrowRight className="h-4 w-4" />
              <span>Explore All Careers</span>
            </Link>
            
            <button
              onClick={onRestart}
              className="flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Retake Quiz</span>
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready to dive deeper into your career journey?
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Start Exploring Careers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;