import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    skills: [],
    experience: '',
    education: '',
    linkedin: '',
    github: '',
    portfolio: ''
  });
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        bio: user.bio || 'Passionate learner on a journey to build an amazing career! 🚀',
        skills: user.skills || ['JavaScript', 'React', 'Node.js'],
        experience: user.experience || 'Fresher',
        education: user.education || 'Bachelor\'s Degree in Computer Science',
        linkedin: user.linkedin || '',
        github: user.github || '',
        portfolio: user.portfolio || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (updateUser) updateUser(formData);
    setIsEditing(false);
    setLoading(false);
  };

  const stats = {
    quizzesTaken: 3,
    roadmapsStarted: 2,
    roadmapsCompleted: 1,
    totalPoints: 1250,
    streak: 7,
    rank: 'Gold Learner'
  };

  const achievements = [
    { id: 1, title: 'Quick Starter', description: 'Completed first quiz', icon: '🚀', earned: true },
    { id: 2, title: 'Knowledge Seeker', description: 'Completed 5 quizzes', icon: '📚', earned: false },
    { id: 3, title: 'Path Master', description: 'Completed first roadmap', icon: '🏆', earned: true },
    { id: 4, title: 'Consistent Learner', description: '7 day streak', icon: '🔥', earned: true },
    { id: 5, title: 'Community Helper', description: 'Helped 10 community members', icon: '🤝', earned: false }
  ];

  if (!user) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl">
                {formData.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl font-bold">{formData.name}</h1>
                <p className="text-purple-100">{formData.email}</p>
                <p className="mt-2">{formData.bio}</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {isEditing ? (
            // Edit Profile Form
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Edit Profile</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="hover:text-red-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill (e.g., Python)"
                      className="flex-grow px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Experience Level</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    >
                      <option>Fresher</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Education</label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white mb-2">LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">GitHub</label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Portfolio</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://yourportfolio.com"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // View Profile
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">📝</div>
                  <div className="text-2xl font-bold text-white">{stats.quizzesTaken}</div>
                  <div className="text-sm text-gray-400">Quizzes Taken</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">🗺️</div>
                  <div className="text-2xl font-bold text-white">{stats.roadmapsCompleted}</div>
                  <div className="text-sm text-gray-400">Roadmaps Done</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="text-2xl font-bold text-white">{stats.totalPoints}</div>
                  <div className="text-sm text-gray-400">Total Points</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="text-2xl font-bold text-white">{stats.streak}</div>
                  <div className="text-sm text-gray-400">Day Streak</div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">  Personal Info</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Experience Level</p>
                      <p className="text-white">{formData.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Education</p>
                      <p className="text-white">{formData.education}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Skills</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {formData.skills.map((skill, index) => (
                          <span key={index} className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">🔗 Social Links</h2>
                  <div className="space-y-3">
                    {formData.linkedin && (
                      <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                        <span>🔗</span> LinkedIn Profile
                      </a>
                    )}
                    {formData.github && (
                      <a href={formData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                        <span>🐙</span> GitHub Profile
                      </a>
                    )}
                    {formData.portfolio && (
                      <a href={formData.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                        <span>🌐</span> Portfolio Website
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">🏆 Achievements</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {achievements.map(achievement => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg ${
                        achievement.earned ? 'bg-purple-600/20 border border-purple-500' : 'bg-white/5 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h3 className="text-white font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                      {achievement.earned && <span className="text-green-400 text-sm mt-2 inline-block">✓ Earned</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">📊 Recent Activity</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div>
                      <p className="text-white">Completed Full Stack Roadmap - Module 3</p>
                      <p className="text-sm text-gray-400">2 days ago</p>
                    </div>
                    <span className="text-green-400">+150 pts</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div>
                      <p className="text-white">Took Career Assessment Quiz</p>
                      <p className="text-sm text-gray-400">5 days ago</p>
                    </div>
                    <span className="text-green-400">+100 pts</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p className="text-white">Joined Community Discussion</p>
                      <p className="text-sm text-gray-400">1 week ago</p>
                    </div>
                    <span className="text-green-400">+50 pts</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;