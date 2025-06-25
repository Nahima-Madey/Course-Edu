import React from 'react';
import { Quote, Star } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: 'Dr. Elena Rodriguez',
      beforeCareer: 'Traditional Physician',
      afterCareer: 'Bioprinting Research Scientist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Transitioning from clinical medicine to bioprinting research has allowed me to work on solutions that could revolutionize organ transplantation. Every day brings us closer to printing functional human organs.',
      rating: 5
    },
    {
      name: 'Marcus Chen',
      beforeCareer: 'Civil Engineer',
      afterCareer: 'Sustainable Architecture Specialist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Moving into sustainable architecture has been incredibly fulfilling. I\'m now designing buildings that actively contribute to environmental restoration while providing beautiful spaces for people to live and work.',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      beforeCareer: 'Museum Curator',
      afterCareer: 'Digital Heritage Preservationist',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Combining my love for cultural heritage with cutting-edge technology has opened up incredible possibilities. I\'m now helping preserve ancient sites through 3D scanning and virtual reality for future generations.',
      rating: 5
    },
    {
      name: 'Dr. James Mitchell',
      beforeCareer: 'Archaeologist',
      afterCareer: 'Space Archaeologist',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Space archaeology is the perfect blend of my archaeological training and fascination with space exploration. I\'m documenting humanity\'s first steps into space and preserving this heritage for the future.',
      rating: 5
    },
    {
      name: 'Dr. Priya Patel',
      beforeCareer: 'Materials Scientist',
      afterCareer: 'Biomimicry Design Engineer',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Nature has been my greatest teacher. By studying how organisms solve complex problems, I\'ve been able to develop revolutionary materials that are both high-performance and completely sustainable.',
      rating: 5
    },
    {
      name: 'Alex Rivera',
      beforeCareer: 'Food Chemist',
      afterCareer: 'Food Science Innovation Specialist',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Working on alternative proteins and sustainable nutrition solutions feels like being part of a food revolution. We\'re creating delicious, nutritious foods that could feed the world sustainably.',
      rating: 5
    },
    {
      name: 'Dr. Michael Foster',
      beforeCareer: 'Environmental Consultant',
      afterCareer: 'Environmental Restoration Specialist',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'There\'s nothing more rewarding than seeing a damaged ecosystem come back to life. My work in environmental restoration has shown me that we can heal the damage we\'ve done to our planet.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      beforeCareer: 'Art History Professor',
      afterCareer: 'Digital Art Conservator',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Merging traditional art conservation with digital technology has revolutionized how we preserve cultural treasures. I can now analyze and restore artworks with precision that was unimaginable just a decade ago.',
      rating: 5
    },
    {
      name: 'Dr. Robert Kim',
      beforeCareer: 'Electrical Engineer',
      afterCareer: 'Alternative Energy Systems Researcher',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Researching next-generation energy systems feels like working on the future itself. Every breakthrough brings us closer to a world powered entirely by clean, renewable energy.',
      rating: 5
    },
    {
      name: 'Dr. Amanda Foster',
      beforeCareer: 'Clinical Psychologist',
      afterCareer: 'Neurologic Music Therapist',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Combining my psychology background with music therapy has opened up incredible healing possibilities. I\'ve seen patients with severe neurological conditions make remarkable recoveries through music-based interventions.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real professionals who discovered emerging career paths and transformed their impact through specialized, cutting-edge fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(0, 6).map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">
                    {story.beforeCareer} → {story.afterCareer}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-gray-300 opacity-50 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  {story.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join thousands of professionals who have discovered their perfect career match
          </p>
          <button className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
            <span>Start Your Journey</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;