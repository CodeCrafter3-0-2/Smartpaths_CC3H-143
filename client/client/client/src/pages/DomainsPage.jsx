import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const DomainsPage = () => {
  const navigate = useNavigate();

  const domains = [
    { id: 1, name: 'Full Stack Development', icon: '💻', description: 'Build complete web applications', demand: 'Very High', salary: '₹8-25 LPA' },
    { id: 2, name: 'Data Science & AI', icon: '📊', description: 'Extract insights from data', demand: 'Very High', salary: '₹10-30 LPA' },
    { id: 3, name: 'Cloud Computing', icon: '☁️', description: 'Design cloud infrastructure', demand: 'High', salary: '₹12-35 LPA' },
    { id: 4, name: 'Cybersecurity', icon: '🔒', description: 'Protect systems from threats', demand: 'Very High', salary: '₹9-28 LPA' },
    { id: 5, name: 'UI/UX Design', icon: '🎨', description: 'Create beautiful experiences', demand: 'High', salary: '₹6-20 LPA' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-4">Career Domains</h1>
        <p className="text-gray-300 text-center mb-12">Explore our curated career paths</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map(domain => (
            <div key={domain.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition cursor-pointer"
                 onClick={() => navigate(`/roadmap/${domain.id}`)}>
              <div className="text-4xl mb-4">{domain.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{domain.name}</h3>
              <p className="text-gray-400 mb-4">{domain.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-green-400">Demand: {domain.demand}</span>
                <span className="text-purple-400">{domain.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DomainsPage;