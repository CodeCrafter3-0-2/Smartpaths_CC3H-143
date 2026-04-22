import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState(42);
  const [streak, setStreak] = useState(7);

  const chartData = [
    { month: 'Jan', progress: 15 },
    { month: 'Feb', progress: 28 },
    { month: 'Mar', progress: 35 },
    { month: 'Apr', progress: 42 },
  ];

  const recommendations = [
    { id: 1, title: 'Complete JavaScript Module', points: 100, deadline: '2 days left', icon: '📘' },
    { id: 2, title: 'Join Community Discussion', points: 50, deadline: 'Today', icon: '💬' },
    { id: 3, title: 'Take React Quiz', points: 150, deadline: '5 days left', icon: '📝' },
  ];

  const skills = [
    { name: 'JavaScript', progress: 75, color: '#f7df1e' },
    { name: 'React', progress: 60, color: '#61dafb' },
    { name: 'Node.js', progress: 45, color: '#68a063' },
    { name: 'Python', progress: 30, color: '#3776ab' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'Learner'}! 👋</h1>
              <p className="text-purple-100">Your career journey is progressing beautifully. Keep going!</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{streak}</div>
              <div className="text-sm">Day Streak 🔥</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Points', value: '1,250', change: '+150', icon: '⭐', color: 'from-yellow-400 to-orange-500' },
            { label: 'Quizzes Taken', value: '8', change: '+2', icon: '📝', color: 'from-blue-400 to-cyan-500' },
            { label: 'Roadmaps', value: '3', change: '+1', icon: '🗺️', color: 'from-green-400 to-emerald-500' },
            { label: 'Certificates', value: '2', change: '+1', icon: '🏆', color: 'from-purple-400 to-pink-500' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div className={`text-2xl bg-gradient-to-r ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <span className="text-green-400 text-sm">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Learning Progress</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ background: '#1a1a2e', border: 'none' }} />
                <Line type="monotone" dataKey="progress" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Progress */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Skills Progress</h2>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="h-2 rounded-full transition-all" style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks & Recommendations */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4"> Recommended Tasks</h2>
            <div className="space-y-3">
              {recommendations.map(task => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{task.icon}</span>
                    <div>
                      <p className="text-white font-medium">{task.title}</p>
                      <p className="text-sm text-gray-400">+{task.points} points • {task.deadline}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-purple-600 rounded-lg text-sm hover:bg-purple-700">Start →</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4"> Career Recommendations</h2>
            <div className="space-y-3">
              {[
                { role: 'Full Stack Developer', match: 92, salary: '₹8-25 LPA', demand: 'High' },
                { role: 'Data Scientist', match: 88, salary: '₹10-30 LPA', demand: 'Very High' },
                { role: 'Cloud Architect', match: 85, salary: '₹12-35 LPA', demand: 'High' },
              ].map((rec, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">{rec.role}</h3>
                    <span className="text-purple-400 text-sm">{rec.match}% Match</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span> {rec.salary}</span>
                    <span> {rec.demand} Demand</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/quiz" className="mt-4 block text-center text-purple-400 hover:text-purple-300">Take Career Quiz →</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;