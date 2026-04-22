import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>🚀 SmartPaths</h1>
        <p style={styles.subtitle}>Your AI-Powered Career Guidance Platform</p>
        <p style={styles.description}>
          Discover your ideal career path with personalized quizzes,
          community insights, and AI-driven recommendations.
        </p>
        <button style={styles.button} onClick={() => navigate('/dashboard')}>
          Get Started →
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
  },
  content: {
    textAlign: 'center',
    zIndex: 1,
    padding: '2rem',
  },
  title: {
    fontSize: '4rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    opacity: 0.95,
  },
  description: {
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    opacity: 0.9,
  },
  button: {
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#667eea',
    background: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

export default Landing;