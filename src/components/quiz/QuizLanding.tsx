import React from 'react';
import { Brain, Clock, Target, ArrowRight } from 'lucide-react';

interface QuizLandingProps {
  onStart: () => void;
}

const QuizLanding: React.FC<QuizLandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
            <Brain className="h-4 w-4 text-blue-500" />
            <span>Discover Your Career Style</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Which career style
            <br />
            <span className="text-blue-600">fits you best?</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Find out in just 3 minutes! Our quiz uses the proven RIASEC model to map your interests 
            to careers, including emerging and niche fields you might never have considered.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3 Minutes</h3>
              <p className="text-gray-600">Quick assessment with 15 carefully crafted questions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">RIASEC Model</h3>
              <p className="text-gray-600">Based on proven career psychology research</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Results</h3>
              <p className="text-gray-600">Get matched with careers that fit your unique style</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What you'll discover:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Your personality code (e.g., "Artistic-Social-Investigative")
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              5-7 curated career suggestions with salary and growth data
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Links to detailed career information and learning resources
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Emerging and niche careers you might never have considered
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={onStart}
            className="group bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-xl transition-all duration-300 font-medium text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto"
          >
            <span>Start Your Career Quiz</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Free • No registration required • Results in 3 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizLanding;