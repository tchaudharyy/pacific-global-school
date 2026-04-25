import RegistrationForm from '../components/RegistrationForm';
import { FaClipboardList, FaSchool, FaFileAlt, FaUserCheck, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { icon: FaClipboardList, title: 'Submit Enquiry', desc: 'Fill out the registration form below or visit us in person.' },
  { icon: FaSchool, title: 'School Tour', desc: 'Visit our campus and meet our faculty for an interaction session.' },
  { icon: FaFileAlt, title: 'Documentation', desc: 'Submit required documents and complete the admission formalities.' },
  { icon: FaUserCheck, title: 'Enrollment', desc: 'Welcome to Pacific Global School! Your child\'s journey begins.' },
];

const documents = [
  'Birth certificate of the child (original + photocopy)',
  'Passport-size photographs of child and parents (4 each)',
  'Aadhaar card of the child and parents',
  'Address proof (Aadhaar/Passport/Utility Bill)',
  'Previous school transfer certificate (if applicable)',
  'Immunization/vaccination record',
];

function Admissions() {
  const s = {
    pageHero: {
      background: 'linear-gradient(135deg, #06D6A0, #004E89)',
      padding: '80px 20px', textAlign: 'center', color: '#fff',
    },
    heroH1: { fontFamily: "'Poppins', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: 10 },
    heroP: { fontSize: '1.1rem', opacity: 0.95 },
    section: { padding: '80px 0' },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
    sectionTitle: { textAlign: 'center', marginBottom: 50 },
    h2: { fontFamily: "'Poppins', sans-serif", fontSize: '2.2rem', color: '#004E89', marginBottom: 10 },
    subtitle: { color: '#636E72', fontSize: '1.1rem' },
    underline: { width: 80, height: 4, background: 'linear-gradient(90deg, #FF6B35, #FFD166)', borderRadius: 2, margin: '15px auto 0' },
    timeline: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 30 },
    step: {
      textAlign: 'center', position: 'relative',
    },
    stepNum: {
      width: 50, height: 50, borderRadius: '50%', background: '#FF6B35', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px',
      fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1.2rem',
    },
    stepIcon: { fontSize: '1.8rem', color: '#004E89', marginBottom: 10 },
    stepTitle: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#2D3436', marginBottom: 8 },
    stepDesc: { color: '#636E72', fontSize: '0.9rem', lineHeight: 1.6 },
    formSection: { maxWidth: 800, margin: '0 auto' },
    docsCard: {
      background: '#fff', borderRadius: 16, padding: 30, maxWidth: 700, margin: '0 auto',
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
    },
    docItem: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 },
    docIcon: { color: '#06D6A0', marginTop: 3, flexShrink: 0 },
    docText: { color: '#636E72', fontSize: '0.95rem' },
    feeCard: {
      background: 'linear-gradient(135deg, #FFF8F0, #fff)', borderRadius: 16, padding: 40,
      maxWidth: 700, margin: '0 auto', textAlign: 'center',
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)', border: '2px dashed #FFD166',
    },
    feeText: { color: '#636E72', fontSize: '1rem', lineHeight: 1.8 },
  };

  return (
    <div>
      <section style={s.pageHero}>
        <h1 style={s.heroH1}>Admissions</h1>
        <p style={s.heroP}>Begin your child&apos;s journey with Pacific Global School</p>
      </section>

      {/* Admission Process */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Admission Process</h2>
            <p style={s.subtitle}>Simple steps to enroll your child</p>
            <div style={s.underline} />
          </div>
          <div style={s.timeline}>
            {steps.map((step, i) => (
              <div key={i} style={s.step}>
                <div style={s.stepNum}>{i + 1}</div>
                <step.icon style={s.stepIcon} />
                <h3 style={s.stepTitle}>{step.title}</h3>
                <p style={s.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Register Now</h2>
            <p style={s.subtitle}>Fill out the form and we&apos;ll get back to you within 2-3 business days</p>
            <div style={s.underline} />
          </div>
          <div style={s.formSection}>
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Documents Required</h2>
            <div style={s.underline} />
          </div>
          <div style={s.docsCard}>
            {documents.map((doc, i) => (
              <div key={i} style={s.docItem}>
                <FaCheckCircle style={s.docIcon} />
                <span style={s.docText}>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Fee Structure</h2>
            <div style={s.underline} />
          </div>
          <div style={s.feeCard}>
            <p style={s.feeText}>
              For detailed fee structure and payment options, please contact our admissions office or visit the school.
            </p>
            <p style={{ ...s.feeText, marginTop: 15 }}>
              <strong>Phone:</strong> 8851723725<br />
              <strong>Email:</strong> tanyachaudhary9911@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
