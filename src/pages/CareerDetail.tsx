import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Clock, BookOpen, Globe, Video, MessageCircle, CheckCircle, Star, DollarSign, Calendar, MapPin, Award, Target, Lightbulb } from 'lucide-react';
import { careers } from '../data/careers';

const CareerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const career = careers.find(c => c.id === id);

  if (!career) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Career Not Found</h1>
          <Link to="/careers" className="text-blue-600 hover:text-blue-700">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const relatedCareers = careers
    .filter(c => c.id !== career.id && c.category === career.category)
    .slice(0, 3);

  // Enhanced career details based on career type
  const getEnhancedCareerDetails = (career: any) => {
    const baseDetails = {
      workEnvironment: "Professional office and field environments",
      typicalDay: "Varies based on project requirements and client needs",
      careerProgression: "Entry-level → Mid-level → Senior → Leadership roles",
      industryGrowth: "Growing field with increasing demand",
      workLifeBalance: "Generally good with standard business hours",
      travelRequirements: "Occasional travel may be required",
      remoteWorkOptions: "Hybrid and remote options increasingly available",
      certifications: ["Industry-specific certifications", "Professional development courses"],
      topEmployers: ["Leading companies in the field", "Government agencies", "Consulting firms"],
      challenges: ["Staying current with technology", "Meeting client expectations", "Managing complex projects"],
      rewards: ["Making meaningful impact", "Continuous learning", "Good compensation"],
      personalityTraits: ["Detail-oriented", "Problem-solver", "Good communicator"],
      physicalDemands: "Minimal physical demands, primarily desk work"
    };

    // Customize based on specific careers
    switch (career.id) {
      case 'automotive-material-designer':
        return {
          ...baseDetails,
          workEnvironment: "Design studios, manufacturing facilities, and testing laboratories",
          typicalDay: "Research sustainable materials, create prototypes, collaborate with engineers, test material durability and aesthetics",
          careerProgression: "Junior Designer → Material Specialist → Senior Designer → Design Director → Chief Design Officer",
          industryGrowth: "Rapidly expanding due to sustainability focus and electric vehicle revolution",
          workLifeBalance: "Good balance with occasional deadline pressures during product launches",
          travelRequirements: "Regular travel to suppliers, manufacturing plants, and auto shows",
          remoteWorkOptions: "Hybrid model with 60% studio time for hands-on material work",
          certifications: ["Sustainable Materials Certification", "Automotive Design Certificate", "CAD Software Proficiency"],
          topEmployers: ["Tesla", "BMW", "Mercedes-Benz", "Ford", "Toyota", "Material innovation startups"],
          challenges: ["Balancing sustainability with performance", "Cost constraints", "Regulatory compliance"],
          rewards: ["Shaping the future of transportation", "Environmental impact", "Creative expression"],
          personalityTraits: ["Creative visionary", "Environmentally conscious", "Technical problem-solver"],
          physicalDemands: "Moderate - handling materials, standing in labs, occasional manufacturing floor visits"
        };

      case 'pediatric-anesthesiologist':
        return {
          ...baseDetails,
          workEnvironment: "Hospitals, surgical centers, and pediatric medical facilities",
          typicalDay: "Pre-operative consultations, administering anesthesia, monitoring patients during surgery, post-operative care",
          careerProgression: "Medical School → Residency → Fellowship → Attending Physician → Department Head → Medical Director",
          industryGrowth: "Stable demand with aging population and advancing surgical techniques",
          workLifeBalance: "Demanding schedule with on-call duties, but highly rewarding",
          travelRequirements: "Minimal, primarily hospital-based",
          remoteWorkOptions: "Limited due to hands-on nature, some telemedicine consultations possible",
          certifications: ["Board Certification in Anesthesiology", "Pediatric Anesthesia Fellowship", "ACLS/PALS Certification"],
          topEmployers: ["Children's hospitals", "Major medical centers", "Academic medical institutions", "Private practice groups"],
          challenges: ["High-stress environment", "Life-and-death decisions", "Continuous education requirements"],
          rewards: ["Saving lives", "Excellent compensation", "Respect and prestige", "Making families whole"],
          personalityTraits: ["Calm under pressure", "Detail-oriented", "Compassionate", "Quick decision-maker"],
          physicalDemands: "High - long hours standing, manual dexterity required, emotional resilience needed"
        };

      case 'healthcare-ux-designer':
        return {
          ...baseDetails,
          workEnvironment: "Tech companies, healthcare organizations, design agencies, and remote offices",
          typicalDay: "User research, wireframing, prototyping, usability testing, collaborating with developers and healthcare professionals",
          careerProgression: "Junior UX Designer → UX Designer → Senior UX Designer → UX Lead → Design Director",
          industryGrowth: "Explosive growth due to digital health transformation and telemedicine adoption",
          workLifeBalance: "Excellent with flexible hours and remote work options",
          travelRequirements: "Occasional travel for user research and client meetings",
          remoteWorkOptions: "Fully remote or hybrid options widely available",
          certifications: ["Google UX Design Certificate", "Healthcare UX Specialization", "Human-Computer Interaction Certification"],
          topEmployers: ["Epic Systems", "Cerner", "Teladoc", "Google Health", "Apple Health", "Healthcare startups"],
          challenges: ["Complex regulatory requirements", "Life-critical design decisions", "Balancing usability with compliance"],
          rewards: ["Improving patient outcomes", "High demand and salary", "Creative problem-solving", "Remote work flexibility"],
          personalityTraits: ["Empathetic", "Analytical", "Creative", "Detail-oriented", "User-focused"],
          physicalDemands: "Low - primarily computer-based work with ergonomic considerations"
        };

      case 'bioprinting-specialist':
        return {
          ...baseDetails,
          workEnvironment: "Research laboratories, biotech companies, universities, and medical device manufacturers",
          typicalDay: "3D bioprinter operation, cell culture preparation, tissue engineering, data analysis, research collaboration",
          careerProgression: "Research Assistant → Bioprinting Technician → Senior Scientist → Principal Investigator → Research Director",
          industryGrowth: "Revolutionary field with massive potential as technology matures",
          workLifeBalance: "Research-focused with flexible hours but project deadline pressures",
          travelRequirements: "Conference travel and collaboration visits to other research institutions",
          remoteWorkOptions: "Limited due to laboratory requirements, some analysis work can be remote",
          certifications: ["Bioengineering Certification", "3D Printing Technology Certificate", "Cell Culture Techniques"],
          topEmployers: ["Organovo", "CELLINK", "3D Systems", "Major universities", "Pharmaceutical companies"],
          challenges: ["Regulatory hurdles", "Technical complexity", "Funding competition", "Ethical considerations"],
          rewards: ["Pioneering life-saving technology", "High intellectual stimulation", "Potential for major breakthroughs"],
          personalityTraits: ["Innovative", "Patient", "Scientifically rigorous", "Collaborative"],
          physicalDemands: "Moderate - laboratory work, precise manual tasks, extended periods of concentration"
        };

      case 'vr-sound-designer':
        return {
          ...baseDetails,
          workEnvironment: "Game studios, VR companies, entertainment companies, and home studios",
          typicalDay: "Creating 3D audio experiences, programming spatial audio, collaborating with developers, testing VR experiences",
          careerProgression: "Junior Sound Designer → Sound Designer → Senior Audio Designer → Audio Director → Creative Director",
          industryGrowth: "Rapidly expanding with VR/AR adoption in gaming, training, and entertainment",
          workLifeBalance: "Good flexibility with project-based work and creative freedom",
          travelRequirements: "Occasional travel for conferences, client meetings, and motion capture sessions",
          remoteWorkOptions: "Excellent remote work opportunities with proper audio equipment setup",
          certifications: ["Pro Tools Certification", "Spatial Audio Certification", "Game Audio Implementation"],
          topEmployers: ["Meta (Oculus)", "Valve", "Unity Technologies", "Epic Games", "Sony Interactive", "Independent studios"],
          challenges: ["Rapidly evolving technology", "Technical complexity of spatial audio", "Hardware limitations"],
          rewards: ["Creative expression", "Cutting-edge technology", "Growing industry", "Artistic fulfillment"],
          personalityTraits: ["Creative", "Technical", "Detail-oriented", "Collaborative", "Innovative"],
          physicalDemands: "Low - studio work with potential for hearing protection considerations"
        };

      default:
        return baseDetails;
    }
  };

  const enhancedDetails = getEnhancedCareerDetails(career);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/careers"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{career.title}</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {career.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {career.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Comprehensive Overview */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Career Overview</h2>
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="mb-4">{career.description}</p>
                <p className="mb-4">
                  This role represents one of the most exciting and rapidly evolving career paths in today's job market. 
                  Professionals in this field are at the forefront of innovation, combining traditional expertise with 
                  cutting-edge technology and methodologies.
                </p>
                <p>
                  The demand for skilled professionals in this area continues to grow as organizations recognize the 
                  critical importance of specialized expertise in driving business success and societal impact.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <TrendingUp className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Growth Outlook</div>
                  <div className="font-bold text-green-700 text-lg">Excellent</div>
                  <div className="text-xs text-green-600 mt-1">15-25% projected growth</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <DollarSign className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Salary Range</div>
                  <div className="font-bold text-blue-700 text-lg">{career.salaryRange.local}</div>
                  <div className="text-xs text-blue-600 mt-1">Global: {career.salaryRange.global}</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Users className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Job Satisfaction</div>
                  <div className="font-bold text-purple-700 text-lg">Very High</div>
                  <div className="text-xs text-purple-600 mt-1">4.2/5 average rating</div>
                </div>
              </div>
            </div>

            {/* Work Environment & Daily Life */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Environment & Daily Life</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                    Work Environment
                  </h3>
                  <p className="text-gray-700 mb-4">{enhancedDetails.workEnvironment}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 text-green-500 mr-2" />
                    Work-Life Balance
                  </h3>
                  <p className="text-gray-700">{enhancedDetails.workLifeBalance}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                    Typical Day
                  </h3>
                  <p className="text-gray-700 mb-4">{enhancedDetails.typicalDay}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="h-5 w-5 text-orange-500 mr-2" />
                    Remote Work Options
                  </h3>
                  <p className="text-gray-700">{enhancedDetails.remoteWorkOptions}</p>
                </div>
              </div>
            </div>

            {/* Skills & Requirements */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Skills & Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Skills</h3>
                  <div className="space-y-3">
                    {career.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personality Traits</h3>
                  <div className="space-y-3">
                    {enhancedDetails.personalityTraits.map((trait, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Star className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Physical Demands</h4>
                <p className="text-gray-700">{enhancedDetails.physicalDemands}</p>
              </div>
            </div>

            {/* Career Path & Progression */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Path & Progression</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="h-5 w-5 text-blue-500 mr-2" />
                    Typical Career Progression
                  </h3>
                  <p className="text-gray-700 mb-4">{enhancedDetails.careerProgression}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Education Path</h3>
                  <div className="space-y-4">
                    {career.educationPath.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Insights */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-2" />
                    Top Employers
                  </h3>
                  <ul className="space-y-2">
                    {enhancedDetails.topEmployers.map((employer, index) => (
                      <li key={index} className="text-gray-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {employer}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="h-5 w-5 text-orange-500 mr-2" />
                    Key Challenges & Rewards
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-red-600 mb-1">Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {enhancedDetails.challenges.map((challenge, index) => (
                          <li key={index}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Rewards:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {enhancedDetails.rewards.map((reward, index) => (
                          <li key={index}>• {reward}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Outlook & Industry Growth</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Star className="h-6 w-6 text-green-500 mr-2" />
                  <p className="text-green-800 font-semibold text-lg">Excellent Growth Prediction</p>
                </div>
                <p className="text-green-700 mb-4 text-lg">{career.futureOutlook}</p>
                <p className="text-gray-700">{enhancedDetails.industryGrowth}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Local Salary Range</div>
                  <div className="font-semibold text-gray-900">{career.salaryRange.local}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Global Salary Range</div>
                  <div className="font-semibold text-gray-900">{career.salaryRange.global}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Category</div>
                  <div className="font-semibold text-gray-900 capitalize">{career.category.replace('-', ' ')}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Travel Requirements</div>
                  <div className="font-semibold text-gray-900">{enhancedDetails.travelRequirements}</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Certifications</h3>
              <div className="space-y-3">
                {enhancedDetails.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Award className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Resources</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    Courses
                  </div>
                  <div className="space-y-2">
                    {career.links.courses.map((course, index) => (
                      <div key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                    <MessageCircle className="h-4 w-4 mr-2 text-blue-500" />
                    Communities
                  </div>
                  <div className="space-y-2">
                    {career.links.communities.map((community, index) => (
                      <div key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        {community}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                    <Video className="h-4 w-4 mr-2 text-blue-500" />
                    Videos
                  </div>
                  <div className="space-y-2">
                    {career.links.videos.map((video, index) => (
                      <div key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        {video}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Ready to Start?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Begin your journey in {career.title} today.
              </p>
              <button className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Related Careers */}
        {relatedCareers.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Careers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCareers.map(relatedCareer => (
                <Link
                  key={relatedCareer.id}
                  to={`/career/${relatedCareer.id}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{relatedCareer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedCareer.shortDescription}</p>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerDetail;