import { Link } from 'react-router-dom';

function HeroBanner() {
  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #FF6B35 0%, #FFD166 30%, #06D6A0 60%, #004E89 100%)',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 20px',
    },
    overlay: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.25)',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 800,
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      color: '#fff',
      padding: '8px 24px',
      borderRadius: 30,
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: '0.95rem',
      marginBottom: 20,
    },
    title: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '3.5rem',
      fontWeight: 800,
      color: '#fff',
      lineHeight: 1.2,
      marginBottom: 20,
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: 'rgba(255,255,255,0.95)',
      marginBottom: 35,
      lineHeight: 1.6,
      fontWeight: 300,
    },
    buttons: {
      display: 'flex',
      gap: 15,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      background: '#fff',
      color: '#FF6B35',
      padding: '14px 36px',
      borderRadius: 30,
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.05rem',
      textDecoration: 'none',
      transition: 'all 0.3s',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    btnOutline: {
      background: 'transparent',
      color: '#fff',
      padding: '14px 36px',
      borderRadius: 30,
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.05rem',
      textDecoration: 'none',
      border: '2px solid #fff',
      transition: 'all 0.3s',
    },
    circle1: {
      position: 'absolute',
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      top: -80,
      right: -80,
    },
    circle2: {
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)',
      bottom: -60,
      left: -60,
    },
    circle3: {
      position: 'absolute',
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'rgba(255,209,102,0.15)',
      top: '30%',
      left: '10%',
    },
  };

  return (
    <section style={styles.hero}>
      <style>{`
        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .hero-subtitle { font-size: 1rem !important; }
        }
      `}</style>
      <div style={styles.overlay} />
      <div style={styles.circle1} />
      <div style={styles.circle2} />
      <div style={styles.circle3} />
      <div style={styles.content}>
        <span style={styles.badge}>Ages 2.5 to 10 Years</span>
        <h1 style={styles.title} className="hero-title">
          Welcome to<br />Pacific Global School
        </h1>
        <p style={styles.subtitle} className="hero-subtitle">
          Nurturing Young Minds for a Brighter Tomorrow
        </p>
        <div style={styles.buttons}>
          <Link to="/admissions" style={styles.btnPrimary}>Enroll Now</Link>
          <Link to="/programs" style={styles.btnOutline}>Explore Programs</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
