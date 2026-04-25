import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
  const s = {
    pageHero: {
      background: 'linear-gradient(135deg, #004E89, #06D6A0)',
      padding: '80px 20px', textAlign: 'center', color: '#fff',
    },
    heroH1: { fontFamily: "'Poppins', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: 10 },
    heroP: { fontSize: '1.1rem', opacity: 0.95 },
    section: { padding: '80px 0' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 },
    infoBox: { display: 'flex', flexDirection: 'column', gap: 25 },
    h2: { fontFamily: "'Poppins', sans-serif", fontSize: '2rem', color: '#004E89', marginBottom: 20 },
    infoCard: {
      display: 'flex', alignItems: 'flex-start', gap: 15,
    },
    infoIcon: {
      width: 50, height: 50, borderRadius: '50%', background: '#FF6B3515',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#FF6B35', fontSize: '1.2rem', flexShrink: 0,
    },
    infoTitle: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#2D3436', fontSize: '1rem', marginBottom: 4 },
    infoText: { color: '#636E72', fontSize: '0.95rem', lineHeight: 1.6 },
    mapPlaceholder: {
      width: '100%', height: 220, borderRadius: 12,
      background: 'linear-gradient(135deg, #e0e0e0, #f5f5f5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#999', fontFamily: "'Poppins', sans-serif", fontWeight: 500,
      border: '2px dashed #ccc', marginTop: 10,
    },
  };

  return (
    <div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <section style={s.pageHero}>
        <h1 style={s.heroH1}>Contact Us</h1>
        <p style={s.heroP}>We&apos;d love to hear from you</p>
      </section>

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.grid} className="contact-grid">
            <div>
              <ContactForm />
            </div>
            <div style={s.infoBox}>
              <h2 style={s.h2}>Get in Touch</h2>

              <div style={s.infoCard}>
                <div style={s.infoIcon}><FaMapMarkerAlt /></div>
                <div>
                  <p style={s.infoTitle}>Our Address</p>
                  <p style={s.infoText}>Pacific Global School<br />New Delhi, India</p>
                </div>
              </div>

              <div style={s.infoCard}>
                <div style={s.infoIcon}><FaPhone /></div>
                <div>
                  <p style={s.infoTitle}>Phone</p>
                  <p style={s.infoText}><a href="tel:8851723725" style={{ color: '#636E72', textDecoration: 'none' }}>8851723725</a></p>
                </div>
              </div>

              <div style={s.infoCard}>
                <div style={s.infoIcon}><FaEnvelope /></div>
                <div>
                  <p style={s.infoTitle}>Email</p>
                  <p style={s.infoText}><a href="mailto:tanyachaudhary9911@gmail.com" style={{ color: '#636E72', textDecoration: 'none' }}>tanyachaudhary9911@gmail.com</a></p>
                </div>
              </div>

              <div style={s.infoCard}>
                <div style={s.infoIcon}><FaClock /></div>
                <div>
                  <p style={s.infoTitle}>Working Hours</p>
                  <p style={s.infoText}>Monday - Friday: 8:00 AM - 3:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div style={s.mapPlaceholder}>
                Google Maps - Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
