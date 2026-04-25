import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function TestimonialCard({ name, role, text, rating }) {
  const styles = {
    card: {
      background: '#fff',
      borderRadius: 16,
      padding: 30,
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
      position: 'relative',
    },
    quoteIcon: {
      color: '#FFD166',
      fontSize: '1.8rem',
      marginBottom: 15,
      opacity: 0.6,
    },
    text: {
      color: '#636E72',
      fontSize: '1rem',
      lineHeight: 1.7,
      fontStyle: 'italic',
      marginBottom: 20,
    },
    stars: {
      display: 'flex',
      gap: 3,
      marginBottom: 15,
    },
    star: {
      color: '#FFD166',
      fontSize: '1rem',
    },
    starEmpty: {
      color: '#ddd',
      fontSize: '1rem',
    },
    name: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      color: '#2D3436',
      fontSize: '1rem',
    },
    role: {
      color: '#FF6B35',
      fontSize: '0.85rem',
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.card}>
      <FaQuoteLeft style={styles.quoteIcon} />
      <p style={styles.text}>{text}</p>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} style={i <= rating ? styles.star : styles.starEmpty} />
        ))}
      </div>
      <p style={styles.name}>{name}</p>
      <p style={styles.role}>{role}</p>
    </div>
  );
}

export default TestimonialCard;
