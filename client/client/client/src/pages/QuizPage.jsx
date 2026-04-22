import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    { id: 1, text: "How do you prefer to solve problems?", options: ["Logical analysis", "Creative thinking", "Team discussion", "Research"] },
    { id: 2, text: "What work environment suits you best?", options: ["Independent work", "Collaborative team", "Leadership role", "Flexible/Remote"] },
    { id: 3, text: "Which skill do you want to develop most?", options: ["Programming", "Design", "Data Analysis", "Communication"] },
    { id: 4, text: "What motivates you at work?", options: ["Solving complex problems", "Creating beautiful things", "Helping others", "Financial rewards"] }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</h1>
          <h2 style={{ marginBottom: '1rem' }}>Quiz Completed!</h2>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>Thank you for completing the career assessment!</p>
          <button onClick={() => navigate('/dashboard')} style={{ background: '#667eea', color: 'white', padding: '10px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div style={{ background: '#e0e0e0', height: '8px', borderRadius: '4px' }}>
              <div style={{ background: '#667eea', height: '8px', borderRadius: '4px', width: `${progress}%` }}></div>
            </div>
          </div>
          
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{currentQ.text}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{ padding: '12px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer', textAlign: 'left' }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        <button onClick={() => navigate('/dashboard')} style={{ color: 'white', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          ← Exit Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPage;