import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Community() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    { id: 1, user: "Amit Kumar", role: "Software Engineer", content: "Just landed my dream job at Google! SmartPaths really helped me find my path. 🎉", likes: 45 },
    { id: 2, user: "Priya Sharma", role: "Data Scientist", content: "Anyone preparing for data science interviews? Let's connect!", likes: 23 },
    { id: 3, user: "Rajesh Verma", role: "UI/UX Designer", content: "Portfolio review thread - drop your links!", likes: 67 },
  ]);
  const [newPost, setNewPost] = useState("");

  const handleAddPost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        user: "You",
        role: "Student",
        content: newPost,
        likes: 0
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>🚀 SmartPaths</h2>
        <div style={styles.navLinks}>
          <button style={styles.navButton} onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button style={styles.navButton} onClick={() => navigate('/quiz')}>Take Quiz</button>
          <button style={styles.navButton} onClick={() => navigate('/community')}>Community</button>
          <button style={styles.navButton} onClick={() => navigate('/')}>Logout</button>
        </div>
      </nav>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>💬 Community Hub</h1>
        <p style={styles.subtitle}>Connect, share, and grow with fellow learners</p>

        <div style={styles.createPost}>
          <textarea
            style={styles.textarea}
            placeholder="Share your journey, ask questions, or help others..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows="3"
          />
          <button style={styles.postButton} onClick={handleAddPost}>
            Post to Community →
          </button>
        </div>

        <div style={styles.postsContainer}>
          {posts.map(post => (
            <div key={post.id} style={styles.postCard}>
              <div style={styles.postHeader}>
                <div>
                  <strong style={styles.userName}>{post.user}</strong>
                  <span style={styles.userRole}> • {post.role}</span>
                </div>
              </div>
              <p style={styles.postContent}>{post.content}</p>
              <div style={styles.postFooter}>
                <button style={styles.likeButton} onClick={() => handleLike(post.id)}>
                  ❤️ {post.likes} likes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#0a0a0f',
  },
  navbar: {
    background: 'rgba(102, 126, 234, 0.1)',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    color: '#667eea',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
  },
  navButton: {
    padding: '8px 20px',
    background: 'transparent',
    color: 'white',
    border: '1px solid #667eea',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  mainContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#888',
    marginBottom: '2rem',
  },
  createPost: {
    marginBottom: '2rem',
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  postButton: {
    marginTop: '1rem',
    padding: '10px 24px',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  postCard: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  postHeader: {
    marginBottom: '0.75rem',
  },
  userName: {
    fontSize: '1rem',
    color: '#667eea',
  },
  userRole: {
    fontSize: '0.85rem',
    color: '#888',
  },
  postContent: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  postFooter: {
    display: 'flex',
    gap: '1rem',
  },
  likeButton: {
    padding: '5px 12px',
    background: 'transparent',
    border: 'none',
    color: '#ff6b6b',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};

export default Community;