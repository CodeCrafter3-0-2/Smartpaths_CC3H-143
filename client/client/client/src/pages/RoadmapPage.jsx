import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import LoadingSpinner from '../components/common/LoadingSpinner';

const RoadmapPage = () => {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [roadmap, setRoadmap] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  // Sample roadmap data - In production, fetch from API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const sampleRoadmap = {
        id: domainId,
        title: getDomainTitle(domainId),
        description: "Complete learning path to become a professional in this field",
        estimatedTime: "6-8 months",
        difficulty: "Intermediate",
        prerequisites: ["Basic computer knowledge", "Problem-solving mindset"],
        steps: getStepsForDomain(domainId),
        resources: getResourcesForDomain(domainId)
      };
      setRoadmap(sampleRoadmap);
      setLoading(false);
    }, 1000);
  }, [domainId]);

  const getDomainTitle = (id) => {
    const titles = {
      '1': 'Full Stack Development',
      '2': 'Data Science & AI',
      '3': 'Cloud Computing',
      '4': 'Cybersecurity',
      '5': 'UI/UX Design'
    };
    return titles[id] || 'Career Roadmap';
  };

  const getStepsForDomain = (id) => {
    const steps = {
      '1': [
        { id: 1, title: 'HTML/CSS Fundamentals', description: 'Learn the building blocks of web development', duration: '2 weeks', topics: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'] },
        { id: 2, title: 'JavaScript Essentials', description: 'Master JavaScript for interactive web apps', duration: '4 weeks', topics: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Fetch API'] },
        { id: 3, title: 'React.js Mastery', description: 'Build modern web applications with React', duration: '6 weeks', topics: ['Components', 'Hooks', 'State Management', 'React Router'] },
        { id: 4, title: 'Backend Development', description: 'Learn Node.js and Express', duration: '4 weeks', topics: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
        { id: 5, title: 'Database Management', description: 'Work with SQL and NoSQL databases', duration: '3 weeks', topics: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma'] },
        { id: 6, title: 'Deployment & DevOps', description: 'Deploy applications to production', duration: '3 weeks', topics: ['Git', 'Docker', 'AWS', 'Vercel/Netlify'] }
      ],
      '2': [
        { id: 1, title: 'Python Programming', description: 'Learn Python for data science', duration: '4 weeks', topics: ['Python Basics', 'NumPy', 'Pandas', 'Data Structures'] },
        { id: 2, title: 'Statistics & Mathematics', description: 'Essential math for data science', duration: '4 weeks', topics: ['Statistics', 'Probability', 'Linear Algebra', 'Calculus'] },
        { id: 3, title: 'Data Visualization', description: 'Create compelling data visualizations', duration: '3 weeks', topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'] },
        { id: 4, title: 'Machine Learning', description: 'Build ML models from scratch', duration: '8 weeks', topics: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'] },
        { id: 5, title: 'Deep Learning', description: 'Advanced neural networks', duration: '6 weeks', topics: ['TensorFlow', 'PyTorch', 'CNN', 'RNN'] },
        { id: 6, title: 'Big Data & Cloud', description: 'Handle large-scale data', duration: '4 weeks', topics: ['Spark', 'Hadoop', 'AWS SageMaker', 'BigQuery'] }
      ]
    };
    return steps[id] || steps['1'];
  };

  const getResourcesForDomain = (id) => {
    const resources = {
      '1': [
        { id: 1, title: 'MDN Web Docs', type: 'Documentation', url: 'https://developer.mozilla.org', free: true },
        { id: 2, title: 'freeCodeCamp', type: 'Course', url: 'https://freecodecamp.org', free: true },
        { id: 3, title: 'The Odin Project', type: 'Course', url: 'https://theodinproject.com', free: true },
        { id: 4, title: 'Frontend Masters', type: 'Course', url: 'https://frontendmasters.com', free: false }
      ],
      '2': [
        { id: 1, title: 'Kaggle', type: 'Platform', url: 'https://kaggle.com', free: true },
        { id: 2, title: 'Coursera - ML by Andrew Ng', type: 'Course', url: 'https://coursera.org', free: false },
        { id: 3, title: 'Fast.ai', type: 'Course', url: 'https://fast.ai', free: true }
      ]
    };
    return resources[id] || resources['1'];
  };

  const toggleTopicCompletion = (stepId, topic) => {
    const topicKey = `${stepId}-${topic}`;
    if (completedTopics.includes(topicKey)) {
      setCompletedTopics(completedTopics.filter(t => t !== topicKey));
    } else {
      setCompletedTopics([...completedTopics, topicKey]);
    }
  };

  const calculateProgress = () => {
    const totalTopics = roadmap?.steps.reduce((acc, step) => acc + step.topics.length, 0) || 1;
    return (completedTopics.length / totalTopics) * 100;
  };

  if (loading) return <LoadingSpinner />;
  if (!roadmap) return <div>Roadmap not found</div>;

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/domains')}
            className="text-purple-400 hover:text-purple-300 mb-4 flex items-center gap-2"
          >
            ← Back to Domains
          </button>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">{roadmap.title}</h1>
            <p className="text-purple-100 mb-4">{roadmap.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ {roadmap.estimatedTime}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📊 {roadmap.difficulty}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">  {progress.toFixed(0)}% Complete</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-white">Overall Progress</span>
            <span className="text-purple-400">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            {completedTopics.length} of {roadmap.steps.reduce((acc, s) => acc + s.topics.length, 0)} topics completed
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Steps */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Learning Path</h2>
            {roadmap.steps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transition-all ${
                  activeStep === index ? 'border-2 border-purple-500' : ''
                }`}
              >
                <button
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                    <p className="text-sm text-purple-400 mt-2">⏱️ {step.duration}</p>
                  </div>
                  <span className="text-2xl text-gray-400">{activeStep === index ? '▲' : '▼'}</span>
                </button>
                
                {activeStep === index && (
                  <div className="p-6 pt-0 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-3">Topics to cover:</h4>
                    <div className="space-y-2">
                      {step.topics.map((topic, topicIndex) => {
                        const isCompleted = completedTopics.includes(`${step.id}-${topic}`);
                        return (
                          <label
                            key={topicIndex}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition"
                          >
                            <input
                              type="checkbox"
                              checked={isCompleted}
                              onChange={() => toggleTopicCompletion(step.id, topic)}
                              className="w-5 h-5 text-purple-600 rounded"
                            />
                            <span className={`text-white ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                              {topic}
                            </span>
                            {isCompleted && <span className="text-green-400 ml-auto">✓</span>}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Resources */}
          <div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">📚 Recommended Resources</h2>
              <div className="space-y-3">
                {roadmap.resources.map(resource => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-white font-semibold group-hover:text-purple-400">
                        {resource.title}
                      </h3>
                      {!resource.free && (
                        <span className="text-xs bg-yellow-600 px-2 py-1 rounded">Premium</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{resource.type}</p>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500">
                <h3 className="text-white font-semibold mb-2">💡 Pro Tip</h3>
                <p className="text-gray-300 text-sm">
                  Practice coding daily for at least 1 hour. Build projects alongside learning to reinforce concepts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Card */}
        {progress === 100 && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg animate-bounce">
            🎉 Congratulations! You've completed the roadmap! 🎉
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RoadmapPage;