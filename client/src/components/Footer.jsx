import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const styles = {
    footer: {
      background: '#004E89',
      color: '#fff',
      padding: '60px 0 0',
    },
    inner: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 40,
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.2rem',
      fontWeight: 700,
      marginBottom: 20,
      color: '#FFD166',
    },
    text: {
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.8,
      fontSize: '0.95rem',
    },
    link: {
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none',
      display: 'block',
      marginBottom: 10,
      fontSize: '0.95rem',
      transition: 'color 0.3s',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: 12,
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.95rem',
    },
    contactIcon: {
      color: '#FFD166',
      marginTop: 4,
      flexShrink: 0,
    },
    socials: {
      display: 'flex',
      gap: 12,
      marginTop: 15,
    },
    socialIcon: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'all 0.3s',
      cursor: 'pointer',
      fontSize: '1.1rem',
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 40,
      padding: '20px 0',
      textAlign: 'center',
      color: 'rgba(255,255,255,0.6)',
      fontSize: '0.85rem',
    },
    schoolName: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.4rem',
      fontWeight: 700,
      marginBottom: 15,
      color: '#fff',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div>
          <div style={styles.schoolName}>Pacific Global School</div>
          <p style={styles.text}>
            Nurturing young minds for a brighter tomorrow. We provide a safe, fun, and engaging learning environment for children ages 2.5 to 10 years.
          </p>
          <div style={styles.socials}>
            <span style={styles.socialIcon}><FaFacebook /></span>
            <span style={styles.socialIcon}><FaInstagram /></span>
            <span style={styles.socialIcon}><FaTwitter /></span>
            <span style={styles.socialIcon}><FaYoutube /></span>
          </div>
        </div>
        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/programs" style={styles.link}>Programs</Link>
          <Link to="/admissions" style={styles.link}>Admissions</Link>
          <Link to="/gallery" style={styles.link}>Gallery</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
        </div>
        <div>
          <h4 style={styles.heading}>Our Programs</h4>
          <Link to="/programs" style={styles.link}>Playgroup (2.5-3.5 yrs)</Link>
          <Link to="/programs" style={styles.link}>Nursery (3.5-4.5 yrs)</Link>
          <Link to="/programs" style={styles.link}>Junior KG (4.5-5.5 yrs)</Link>
          <Link to="/programs" style={styles.link}>Senior KG (5.5-6.5 yrs)</Link>
          <Link to="/programs" style={styles.link}>Grade 1-2 (6.5-8 yrs)</Link>
          <Link to="/programs" style={styles.link}>Grade 3-4 (8-10 yrs)</Link>
        </div>
        <div>
          <h4 style={styles.heading}>Contact Info</h4>
          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={styles.contactIcon} />
            <span>Pacific Global School, New Delhi, India</span>
          </div>
          <div style={styles.contactItem}>
            <FaPhone style={styles.contactIcon} />
            <a href="tel:8851723725" style={{ color: 'inherit', textDecoration: 'none' }}>8851723725</a>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={styles.contactIcon} />
            <a href="mailto:tanyachaudhary9911@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>tanyachaudhary9911@gmail.com</a>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          &copy; {new Date().getFullYear()} Pacific Global School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
