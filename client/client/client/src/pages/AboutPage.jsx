import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8 text-center">About SmartPaths</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At SmartPaths, we believe that everyone deserves a clear path to their dream career. 
              Our mission is to democratize career guidance by providing AI-powered, personalized 
              roadmaps that help individuals navigate their professional journey with confidence.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold mb-2">AI-Powered Assessments</h3>
                <p className="text-gray-400">Smart algorithms that understand your strengths and interests</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">🗺️</div>
                <h3 className="font-semibold mb-2">Personalized Roadmaps</h3>
                <p className="text-gray-400">Step-by-step learning paths tailored just for you</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">👥</div>
                <h3 className="font-semibold mb-2">Community Support</h3>
                <p className="text-gray-400">Connect with mentors and peers on similar journeys</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold mb-2">Curated Resources</h3>
                <p className="text-gray-400">High-quality learning materials from trusted sources</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Get Started Today
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;