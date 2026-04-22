import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: '🎯', title: 'AI-Powered Matching', desc: '95% accuracy in career recommendations', color: 'from-purple-500 to-pink-500' },
    { icon: '📚', title: 'Curated Resources', desc: '1000+ learning materials from experts', color: 'from-blue-500 to-cyan-500' },
    { icon: '👥', title: 'Mentor Network', desc: 'Connect with industry professionals', color: 'from-green-500 to-emerald-500' },
    { icon: '🏆', title: 'Gamified Learning', desc: 'Earn badges and track progress', color: 'from-orange-500 to-red-500' },
    { icon: '💼', title: 'Job Assistance', desc: 'Get hired by top companies', color: 'from-indigo-500 to-purple-500' },
    { icon: '🌍', title: 'Global Community', desc: 'Join 10,000+ active learners', color: 'from-teal-500 to-green-500' },
  ];

  const testimonials = [
    { name: 'Rahul Sharma', role: 'Software Engineer at Google', text: 'SmartPaths helped me transition from a non-tech background to landing my dream job!', rating: 5, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Priya Patel', role: 'Data Scientist at Amazon', text: 'The personalized roadmap was a game-changer. I knew exactly what to learn next.', rating: 5, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Amit Kumar', role: 'Product Manager at Microsoft', text: 'Best career guidance platform I\'ve ever used. Highly recommended!', rating: 5, image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-purple-300 text-sm"> SmartPaths</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dream Career
              </span>{' '}
              Starts Here
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover your ideal career path with personalized roadmaps, AI-driven insights, and a supportive community of 10,000+ learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10">Get Started Free →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </Link>
              <Link to="/about" className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all">
                Watch Demo ▶
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <span>✅ No credit card required</span>
              <span>🎓 7-day free trial</span>
              <span>🔄 Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Users', icon: '' },
              { value: '50+', label: 'Career Paths', icon: '' },
              { value: '95%', label: 'Success Rate', icon: ' ' },
              { value: '1M+', label: 'Hours Learned', icon: '' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SmartPaths?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Everything you need to build a successful career in one platform</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all hover:transform hover:-translate-y-2">
                <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Take Assessment', desc: 'Complete our AI-powered career quiz', icon: '' },
              { step: '02', title: 'Get Roadmap', desc: 'Receive personalized learning path', icon: '' },
              { step: '03', title: 'Start Learning', desc: 'Access curated resources and track progress', icon: '' },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="text-6xl font-bold text-purple-500/20 mb-4">{item.step}</div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {idx < 2 && <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-x-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <span key={i}></span>)}
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Join thousands of successful professionals who found their path with SmartPaths</p>
          <Link to="/register" className="inline-block px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105">
            Get Started For Free →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;