import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Brand & CTA */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">CourseEdu</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Ready to discover your
                <br />
                <span className="text-blue-500">perfect career?</span>
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands who've found their ideal career path through our platform.
              </p>
              
              <Link
                to="/quiz"
                className="group inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Take Career Quiz</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Side - Navigation */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  Explore
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/careers" 
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                    >
                      All Careers
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/quiz" 
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                    >
                      Career Quiz
                    </Link>
                  </li>
                  <li>
                    <button className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                      Featured Careers
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/about" 
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <button className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                      Contact
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                      Privacy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 CourseEdu. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              
              <button className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              
              <button className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;