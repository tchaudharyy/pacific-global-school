import { FaCalendarAlt, FaTrophy, FaPalette, FaFlask, FaUsers, FaMusic, FaGraduationCap, FaTree } from 'react-icons/fa';

const upcomingEvents = [
  { icon: FaGraduationCap, title: 'Annual Day Celebration', date: 'March 15, 2026', desc: 'A grand celebration of talent, learning, and achievement with performances by students from all programs.', color: '#FF6B35' },
  { icon: FaTrophy, title: 'Sports Day', date: 'April 5, 2026', desc: 'A day filled with fun races, relay events, and team sports for all age groups.', color: '#004E89' },
  { icon: FaPalette, title: 'Art Exhibition', date: 'May 10, 2026', desc: 'Showcasing the creative artwork of our young artists. Open for all parents and visitors.', color: '#EF476F' },
  { icon: FaFlask, title: 'Science Fair', date: 'June 20, 2026', desc: 'Students present their innovative science projects and experiments. A celebration of curiosity!', color: '#06D6A0' },
  { icon: FaUsers, title: 'Parent-Teacher Meet', date: 'July 12, 2026', desc: 'An opportunity for parents and teachers to discuss student progress and development.', color: '#7B61FF' },
];

const calendarHighlights = [
  { month: 'August', event: 'Independence Day Celebration', icon: FaTree },
  { month: 'September', event: 'Teacher\'s Day Program', icon: FaGraduationCap },
  { month: 'October', event: 'Diwali & Dussehra Celebrations', icon: FaMusic },
  { month: 'November', event: 'Children\'s Day Fun Fair', icon: FaTrophy },
  { month: 'December', event: 'Christmas Party & Winter Carnival', icon: FaPalette },
  { month: 'January', event: 'Republic Day Celebration', icon: FaTree },
  { month: 'February', event: 'Graduation Ceremony (Sr KG)', icon: FaGraduationCap },
];

const pastEvents = [
  { title: 'Diwali Celebration 2025', desc: 'Students celebrated with rangoli making, diya decoration, and cultural performances.', color: '#FFD166' },
  { title: 'Christmas Carnival 2025', desc: 'A magical winter carnival with Santa, games, gifts, and joyful celebrations.', color: '#EF476F' },
  { title: 'Republic Day 2026', desc: 'Patriotic performances, flag hoisting ceremony, and a special assembly.', color: '#06D6A0' },
];

function Events() {
  const s = {
    pageHero: {
      background: 'linear-gradient(135deg, #7B61FF, #004E89)',
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
    eventCard: (color) => ({
      background: '#fff', borderRadius: 16, padding: 25,
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)', borderLeft: `4px solid ${color}`,
      display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 20,
    }),
    eventIcon: (color) => ({
      width: 55, height: 55, borderRadius: 12, background: `${color}15`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color, fontSize: '1.5rem', flexShrink: 0,
    }),
    eventTitle: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#2D3436', fontSize: '1.1rem', marginBottom: 5 },
    eventDate: { color: '#FF6B35', fontWeight: 600, fontSize: '0.85rem', marginBottom: 8, fontFamily: "'Poppins', sans-serif" },
    eventDesc: { color: '#636E72', fontSize: '0.95rem', lineHeight: 1.6 },
    calGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 15 },
    calCard: {
      background: '#fff', borderRadius: 12, padding: '18px 20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 12,
    },
    calMonth: {
      background: '#004E89', color: '#fff', padding: '8px 14px', borderRadius: 8,
      fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.8rem',
      whiteSpace: 'nowrap',
    },
    calEvent: { color: '#2D3436', fontSize: '0.95rem', fontWeight: 500 },
    pastGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 25 },
    pastCard: (color) => ({
      background: '#fff', borderRadius: 16, padding: 25, borderTop: `4px solid ${color}`,
      boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
    }),
    pastTitle: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#2D3436', fontSize: '1.05rem', marginBottom: 8 },
    pastDesc: { color: '#636E72', fontSize: '0.9rem', lineHeight: 1.6 },
  };

  return (
    <div>
      <section style={s.pageHero}>
        <h1 style={s.heroH1}>Events & Activities</h1>
        <p style={s.heroP}>Celebrating learning, creativity, and togetherness</p>
      </section>

      {/* Upcoming Events */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Upcoming Events</h2>
            <p style={s.subtitle}>Mark your calendars for these exciting events!</p>
            <div style={s.underline} />
          </div>
          {upcomingEvents.map((ev, i) => (
            <div key={i} style={s.eventCard(ev.color)}>
              <div style={s.eventIcon(ev.color)}><ev.icon /></div>
              <div>
                <h3 style={s.eventTitle}>{ev.title}</h3>
                <p style={s.eventDate}><FaCalendarAlt style={{ marginRight: 5 }} />{ev.date}</p>
                <p style={s.eventDesc}>{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar Highlights */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Annual Calendar Highlights</h2>
            <div style={s.underline} />
          </div>
          <div style={s.calGrid}>
            {calendarHighlights.map((c, i) => (
              <div key={i} style={s.calCard}>
                <span style={s.calMonth}>{c.month}</span>
                <span style={s.calEvent}>{c.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Past Events</h2>
            <p style={s.subtitle}>Glimpses from our recent events</p>
            <div style={s.underline} />
          </div>
          <div style={s.pastGrid}>
            {pastEvents.map((pe, i) => (
              <div key={i} style={s.pastCard(pe.color)}>
                <h3 style={s.pastTitle}>{pe.title}</h3>
                <p style={s.pastDesc}>{pe.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
