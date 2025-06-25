import React from 'react';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CourseEdu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We believe everyone deserves to find their perfect career path, especially those 
              who are multi-passionate, curious, or simply don't know what's out there.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            CourseEdu exists to help people discover lesser-known and emerging careers beyond 
            traditional paths. We're here for the quiet decorator who never knew they could be 
            an event designer, the teenager who loves gaming and discovers game development, 
            and the accountant who's truly a creative at heart.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Genuine Care</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We genuinely care about helping people find clarity in their career journey. 
              Every feature we build is designed with real people's struggles and dreams in mind.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Discovery Focus</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We spotlight careers that traditional guidance counselors might never mention. 
              Our goal is to expand your horizons and show you what's possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Community Driven</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our platform grows through real stories from people who've made successful 
              career transitions and discovered their passion.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Actionable Guidance</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We don't just tell you about careers – we provide clear pathways, 
              resources, and next steps to help you actually pursue them.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              CourseEdu was born from a simple realization: most people don't know what careers 
              exist beyond the obvious ones. While everyone knows about doctors, lawyers, and teachers, 
              few people know about UX researchers, sustainability consultants, or learning experience designers.
            </p>
            <p className="mb-4">
              We started this platform because we believe that career confusion often stems from 
              limited exposure to possibilities, not from lack of talent or passion. When you don't 
              know something exists, you can't pursue it.
            </p>
            <p>
              Today, we're building a comprehensive resource that helps curious minds discover 
              their next adventure, whether they're students choosing their first path or 
              professionals ready for a meaningful change.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
              <div className="text-gray-600">Career Paths Documented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-gray-600">Industries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">10k+</div>
              <div className="text-gray-600">People Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;