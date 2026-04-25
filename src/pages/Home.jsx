import { Link } from 'react-router-dom';
import { FaShieldAlt, FaChalkboardTeacher, FaGamepad, FaHeart, FaGraduationCap, FaUsers, FaAward, FaBookOpen, FaPuzzlePiece, FaChild, FaBook, FaPencilAlt, FaLaptop, FaRunning } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import ProgramCard from '../components/ProgramCard';
import TestimonialCard from '../components/TestimonialCard';

const whyChooseUs = [
  { icon: FaShieldAlt, title: 'Safe Environment', desc: 'CCTV-monitored campus with trained staff ensuring your child\'s safety at all times.', color: '#FF6B35' },
  { icon: FaChalkboardTeacher, title: 'Experienced Teachers', desc: 'Qualified and passionate educators dedicated to bringing out the best in every child.', color: '#004E89' },
  { icon: FaGamepad, title: 'Fun Learning', desc: 'Play-based curriculum that makes learning enjoyable and engaging for young minds.', color: '#06D6A0' },
  { icon: FaHeart, title: 'Holistic Development', desc: 'Focus on physical, emotional, social, and intellectual growth of every child.', color: '#EF476F' },
];

const programsData = [
  { title: 'Playgroup', ageRange: '2.5 - 3.5 years', desc: 'Sensory play, motor skills development, and social interaction through fun activities.', icon: FaPuzzlePiece, color: '#FF6B35' },
  { title: 'Nursery', ageRange: '3.5 - 4.5 years', desc: 'Early literacy, number concepts, art & craft, and language development.', icon: FaChild, color: '#004E89' },
  { title: 'Junior KG', ageRange: '4.5 - 5.5 years', desc: 'Pre-reading skills, writing readiness, and environmental awareness.', icon: FaBook, color: '#06D6A0' },
  { title: 'Senior KG', ageRange: '5.5 - 6.5 years', desc: 'Reading fluency, basic math, and science exploration through hands-on activities.', icon: FaPencilAlt, color: '#FFD166' },
  { title: 'Grade 1-2', ageRange: '6.5 - 8 years', desc: 'Formal academics, language skills, computer basics, and creative arts.', icon: FaLaptop, color: '#EF476F' },
  { title: 'Grade 3-4', ageRange: '8 - 10 years', desc: 'Advanced learning, project-based education, sports, and leadership skills.', icon: FaRunning, color: '#7B61FF' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Parent of Aarav (Nursery)', text: 'Pacific Global School has been wonderful for our son. The teachers are caring and the curriculum is perfectly balanced between learning and fun.', rating: 5 },
  { name: 'Rahul Gupta', role: 'Parent of Ananya (Sr KG)', text: 'We are amazed at how much our daughter has grown since joining. The school truly focuses on holistic development. Highly recommend!', rating: 5 },
  { name: 'Meera Patel', role: 'Parent of Vihaan (Grade 1)', text: 'The safe environment and experienced faculty give us complete peace of mind. Our son looks forward to going to school every day!', rating: 4 },
];

const stats = [
  { icon: FaGraduationCap, value: '500+', label: 'Students Enrolled' },
  { icon: FaUsers, value: '25+', label: 'Expert Teachers' },
  { icon: FaAward, value: '10+', label: 'Years of Excellence' },
  { icon: FaBookOpen, value: '6', label: 'Programs Offered' },
];

function Home() {
  const s = {
    section: { padding: '80px 0' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
    sectionTitle: { textAlign: 'center', marginBottom: 50 },
    h2: { fontFamily: "'Poppins', sans-serif", fontSize: '2.5rem', color: '#004E89', marginBottom: 10 },
    subtitle: { color: '#636E72', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' },
    underline: { width: 80, height: 4, background: 'linear-gradient(90deg, #FF6B35, #FFD166)', borderRadius: 2, margin: '15px auto 0' },
    grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 25 },
    grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 25 },
    whyCard: (color) => ({
      background: '#fff', borderRadius: 16, padding: 30, textAlign: 'center',
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)', transition: 'transform 0.3s',
    }),
    whyIcon: (color) => ({
      width: 70, height: 70, borderRadius: '50%', background: `${color}15`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto 20px', color, fontSize: '1.8rem',
    }),
    whyTitle: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#2D3436', marginBottom: 10 },
    whyDesc: { color: '#636E72', fontSize: '0.95rem', lineHeight: 1.6 },
    statsBg: {
      background: 'linear-gradient(135deg, #004E89, #0077B6)', padding: '60px 0',
    },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
    statCard: { textAlign: 'center', color: '#fff' },
    statIcon: { fontSize: '2.5rem', marginBottom: 10, color: '#FFD166' },
    statValue: { fontFamily: "'Poppins', sans-serif", fontSize: '2.5rem', fontWeight: 800 },
    statLabel: { fontSize: '1rem', opacity: 0.9, marginTop: 5 },
    ctaBg: {
      background: 'linear-gradient(135deg, #FF6B35, #FFD166)', padding: '60px 20px', textAlign: 'center',
    },
    ctaH2: { fontFamily: "'Poppins', sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 15 },
    ctaP: { color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: 25 },
    ctaBtn: {
      background: '#fff', color: '#FF6B35', padding: '14px 36px', borderRadius: 30,
      fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div>
      <HeroBanner />

      {/* Why Choose Us */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Why Choose Us?</h2>
            <p style={s.subtitle}>We create a nurturing environment where every child can thrive</p>
            <div style={s.underline} />
          </div>
          <div style={s.grid4}>
            {whyChooseUs.map((item, i) => (
              <div key={i} style={s.whyCard(item.color)}>
                <div style={s.whyIcon(item.color)}><item.icon /></div>
                <h3 style={s.whyTitle}>{item.title}</h3>
                <p style={s.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Our Programs</h2>
            <p style={s.subtitle}>Age-appropriate programs designed to spark curiosity and love for learning</p>
            <div style={s.underline} />
          </div>
          <div style={s.grid3}>
            {programsData.map((p, i) => (
              <ProgramCard key={i} title={p.title} ageRange={p.ageRange} description={p.desc} icon={p.icon} color={p.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={s.statsBg}>
        <div style={s.statsGrid}>
          {stats.map((st, i) => (
            <div key={i} style={s.statCard}>
              <st.icon style={s.statIcon} />
              <div style={s.statValue}>{st.value}</div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>What Parents Say</h2>
            <p style={s.subtitle}>Hear from parents who trust Pacific Global School with their children</p>
            <div style={s.underline} />
          </div>
          <div style={s.grid3}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} name={t.name} role={t.role} text={t.text} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={s.ctaBg}>
        <h2 style={s.ctaH2}>Ready to Give Your Child the Best Start?</h2>
        <p style={s.ctaP}>Join the Pacific Global School family today!</p>
        <Link to="/admissions" style={s.ctaBtn}>Enroll Now</Link>
      </section>
    </div>
  );
}

export default Home;
