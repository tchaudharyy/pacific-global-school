import { FaBullseye, FaEye, FaHandsHelping, FaSchool, FaFutbol, FaBookReader, FaPaintBrush, FaCheckCircle } from 'react-icons/fa';

const missionCards = [
  { icon: FaBullseye, title: 'Our Mission', text: 'To provide quality education that nurtures creativity, critical thinking, and a love for learning in every child.', color: '#FF6B35' },
  { icon: FaEye, title: 'Our Vision', text: 'To be a leading institution in early childhood and primary education, recognized for holistic development.', color: '#004E89' },
  { icon: FaHandsHelping, title: 'Our Values', text: 'Integrity, compassion, respect, excellence, and innovation guide everything we do at Pacific Global School.', color: '#06D6A0' },
];

const infrastructure = [
  { icon: FaSchool, title: 'Modern Classrooms', desc: 'Bright, spacious, and well-equipped classrooms designed for interactive learning.' },
  { icon: FaFutbol, title: 'Play Area', desc: 'Safe outdoor and indoor play areas with age-appropriate equipment for physical development.' },
  { icon: FaBookReader, title: 'Library', desc: 'A well-stocked library with age-appropriate books to cultivate the reading habit early.' },
  { icon: FaPaintBrush, title: 'Activity Room', desc: 'Dedicated space for art, craft, music, and dance to encourage creative expression.' },
];

const reasons = [
  'Child-centric teaching methodology focused on individual growth',
  'Low student-to-teacher ratio for personalized attention',
  'Safe and hygienic campus with CCTV monitoring',
  'Regular parent-teacher communication and progress updates',
  'Emphasis on values, life skills, and emotional intelligence',
  'Engaging co-curricular activities including sports, art, and music',
];

function About() {
  const s = {
    pageHero: {
      background: 'linear-gradient(135deg, #004E89, #0077B6)',
      padding: '80px 20px', textAlign: 'center', color: '#fff',
    },
    heroH1: { fontFamily: "'Poppins', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: 10 },
    heroP: { fontSize: '1.1rem', opacity: 0.9 },
    section: { padding: '80px 0' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
    sectionTitle: { textAlign: 'center', marginBottom: 50 },
    h2: { fontFamily: "'Poppins', sans-serif", fontSize: '2.2rem', color: '#004E89', marginBottom: 10 },
    underline: { width: 80, height: 4, background: 'linear-gradient(90deg, #FF6B35, #FFD166)', borderRadius: 2, margin: '15px auto 0' },
    grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 25 },
    grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 25 },
    card: (color) => ({
      background: '#fff', borderRadius: 16, padding: 30, textAlign: 'center',
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)', borderTop: `4px solid ${color}`,
    }),
    iconWrap: (color) => ({
      width: 70, height: 70, borderRadius: '50%', background: `${color}15`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto 20px', color, fontSize: '1.8rem',
    }),
    cardTitle: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#2D3436', marginBottom: 10 },
    cardText: { color: '#636E72', fontSize: '0.95rem', lineHeight: 1.6 },
    methodBox: {
      background: '#fff', borderRadius: 16, padding: 40, maxWidth: 800, margin: '0 auto',
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)', textAlign: 'center',
    },
    methodText: { color: '#636E72', fontSize: '1.05rem', lineHeight: 1.8 },
    infraCard: {
      background: '#fff', borderRadius: 16, padding: 25, textAlign: 'center',
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
    },
    infraIcon: { fontSize: '2.2rem', color: '#FF6B35', marginBottom: 15 },
    reasonItem: {
      display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 18,
    },
    reasonIcon: { color: '#06D6A0', fontSize: '1.2rem', marginTop: 3, flexShrink: 0 },
    reasonText: { color: '#636E72', fontSize: '1rem', lineHeight: 1.6 },
  };

  return (
    <div>
      <section style={s.pageHero}>
        <h1 style={s.heroH1}>About Pacific Global School</h1>
        <p style={s.heroP}>Building a strong foundation for lifelong learning</p>
      </section>

      {/* Mission Vision Values */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.grid3}>
            {missionCards.map((m, i) => (
              <div key={i} style={s.card(m.color)}>
                <div style={s.iconWrap(m.color)}><m.icon /></div>
                <h3 style={s.cardTitle}>{m.title}</h3>
                <p style={s.cardText}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Our Methodology</h2>
            <div style={s.underline} />
          </div>
          <div style={s.methodBox}>
            <p style={s.methodText}>
              At Pacific Global School, we believe in <strong>experiential learning</strong> and <strong>play-based education</strong>. Our curriculum is designed to make learning fun and meaningful. We focus on the holistic development of each child — cognitive, physical, emotional, and social — through a blend of structured activities and free exploration.
            </p>
            <p style={{ ...s.methodText, marginTop: 20 }}>
              Our teachers act as facilitators, guiding children through discovery-based learning experiences. We integrate arts, music, movement, and outdoor play into our daily routine, ensuring every child develops a lifelong love for learning.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Our Infrastructure</h2>
            <div style={s.underline} />
          </div>
          <div style={s.grid4}>
            {infrastructure.map((item, i) => (
              <div key={i} style={s.infraCard}>
                <item.icon style={s.infraIcon} />
                <h3 style={s.cardTitle}>{item.title}</h3>
                <p style={s.cardText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Why Choose Pacific Global School?</h2>
            <div style={s.underline} />
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {reasons.map((r, i) => (
              <div key={i} style={s.reasonItem}>
                <FaCheckCircle style={s.reasonIcon} />
                <span style={s.reasonText}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
