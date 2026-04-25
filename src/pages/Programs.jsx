import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import { FaPuzzlePiece, FaChild, FaBook, FaPencilAlt, FaLaptop, FaRunning } from 'react-icons/fa';

const programsData = [
  {
    title: 'Playgroup', ageRange: '2.5 - 3.5 years', icon: FaPuzzlePiece, color: '#FF6B35',
    desc: 'A gentle introduction to the world of learning through sensory play, motor skills development, music, and movement.',
    highlights: ['Sensory exploration activities', 'Fine and gross motor skill development', 'Music, rhymes, and storytelling', 'Social interaction and sharing skills', 'Free play and guided play sessions'],
  },
  {
    title: 'Nursery', ageRange: '3.5 - 4.5 years', icon: FaChild, color: '#004E89',
    desc: 'Building on early foundations with introduction to literacy, numeracy, art, and creative expression.',
    highlights: ['Introduction to alphabets and phonics', 'Number recognition and counting', 'Art, craft, and creative projects', 'Basic Hindi and English vocabulary', 'Group activities and teamwork'],
  },
  {
    title: 'Junior KG', ageRange: '4.5 - 5.5 years', icon: FaBook, color: '#06D6A0',
    desc: 'Developing pre-reading and writing readiness while fostering curiosity about the world around them.',
    highlights: ['Pre-reading and writing readiness', 'Pattern recognition and basic math', 'Environmental awareness and nature study', 'Story comprehension and narration', 'Physical education and yoga'],
  },
  {
    title: 'Senior KG', ageRange: '5.5 - 6.5 years', icon: FaPencilAlt, color: '#FFD166',
    desc: 'Strengthening reading, writing, and mathematical skills to prepare for formal schooling.',
    highlights: ['Reading fluency and comprehension', 'Basic arithmetic (addition, subtraction)', 'Science exploration through experiments', 'Creative writing foundations', 'Computer familiarization'],
  },
  {
    title: 'Grade 1-2', ageRange: '6.5 - 8 years', icon: FaLaptop, color: '#EF476F',
    desc: 'Formal academics with a focus on language proficiency, math skills, and introduction to technology.',
    highlights: ['English and Hindi language skills', 'Mathematics fundamentals', 'General science and social studies', 'Computer basics and digital literacy', 'Art, music, and sports activities'],
  },
  {
    title: 'Grade 3-4', ageRange: '8 - 10 years', icon: FaRunning, color: '#7B61FF',
    desc: 'Advanced learning with project-based education, critical thinking, and leadership development.',
    highlights: ['Advanced language and communication', 'Math problem-solving and reasoning', 'Science projects and experiments', 'Social studies and current affairs', 'Leadership skills and public speaking'],
  },
];

function Programs() {
  const s = {
    pageHero: {
      background: 'linear-gradient(135deg, #FF6B35, #FFD166)',
      padding: '80px 20px', textAlign: 'center', color: '#fff',
    },
    heroH1: { fontFamily: "'Poppins', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: 10 },
    heroP: { fontSize: '1.1rem', opacity: 0.95 },
    section: { padding: '80px 0' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
    sectionTitle: { textAlign: 'center', marginBottom: 50 },
    h2: { fontFamily: "'Poppins', sans-serif", fontSize: '2.2rem', color: '#004E89', marginBottom: 10 },
    subtitle: { color: '#636E72', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' },
    underline: { width: 80, height: 4, background: 'linear-gradient(90deg, #FF6B35, #FFD166)', borderRadius: 2, margin: '15px auto 0' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 30 },
    detailCard: {
      background: '#fff', borderRadius: 16, padding: 30,
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
    },
    highlights: { marginTop: 15, paddingLeft: 0 },
    highlightItem: {
      display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
      color: '#636E72', fontSize: '0.9rem',
    },
    dot: (color) => ({
      width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0,
    }),
    ctaBg: {
      background: 'linear-gradient(135deg, #004E89, #0077B6)',
      padding: '60px 20px', textAlign: 'center',
    },
    ctaH2: { fontFamily: "'Poppins', sans-serif", fontSize: '2rem', color: '#fff', marginBottom: 15 },
    ctaP: { color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: 25 },
    ctaBtn: {
      background: '#FF6B35', color: '#fff', padding: '14px 36px', borderRadius: 30,
      fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div>
      <section style={s.pageHero}>
        <h1 style={s.heroH1}>Our Programs</h1>
        <p style={s.heroP}>Age-appropriate programs designed to ignite curiosity and inspire learning</p>
      </section>

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Programs for Ages 2.5 to 10 Years</h2>
            <p style={s.subtitle}>Each program is carefully crafted to meet the developmental needs of your child</p>
            <div style={s.underline} />
          </div>
          <div style={s.grid}>
            {programsData.map((p, i) => (
              <div key={i} style={s.detailCard}>
                <ProgramCard title={p.title} ageRange={p.ageRange} description={p.desc} icon={p.icon} color={p.color} />
                <div style={s.highlights}>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={s.highlightItem}>
                      <span style={s.dot(p.color)} />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={s.ctaBg}>
        <h2 style={s.ctaH2}>Ready to Enroll Your Child?</h2>
        <p style={s.ctaP}>Take the first step toward your child&apos;s bright future</p>
        <Link to="/admissions" style={s.ctaBtn}>Apply Now</Link>
      </section>
    </div>
  );
}

export default Programs;
