import { useState } from 'react';

function ProgramCard({ title, ageRange, description, icon: Icon, color }) {
  const [hovered, setHovered] = useState(false);

  const styles = {
    card: {
      background: '#fff',
      borderRadius: 16,
      padding: 30,
      borderTop: `4px solid ${color}`,
      boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.12)' : '0 2px 10px rgba(0,0,0,0.06)',
      transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center',
    },
    iconWrap: {
      width: 70,
      height: 70,
      borderRadius: '50%',
      background: `${color}15`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      color: color,
      fontSize: '1.8rem',
    },
    title: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.2rem',
      fontWeight: 700,
      color: '#2D3436',
      marginBottom: 8,
    },
    ageRange: {
      fontSize: '0.9rem',
      color: color,
      fontWeight: 600,
      marginBottom: 12,
      fontFamily: "'Poppins', sans-serif",
    },
    description: {
      color: '#636E72',
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.iconWrap}>
        {Icon && <Icon />}
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.ageRange}>{ageRange}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

export default ProgramCard;
