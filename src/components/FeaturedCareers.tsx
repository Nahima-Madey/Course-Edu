import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { careers } from '../data/careers';

const FeaturedCareers: React.FC = () => {
  const featuredCareers = careers.filter(career => career.featured);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Career Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cutting-edge and high-impact careers that are shaping the future of work across emerging industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {career.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {career.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                    <span>{career.futureOutlook.slice(0, 40)}...</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Salary: {career.salaryRange.local}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{career.skills.length} key skills required</span>
                  </div>
                </div>

                <Link
                  to={`/career/${career.id}`}
                  className="group flex items-center justify-between w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-xl transition-all duration-300 font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/careers"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 font-medium"
          >
            <span>View All Careers</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCareers;