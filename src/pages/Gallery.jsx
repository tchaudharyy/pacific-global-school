import GalleryGrid from '../components/GalleryGrid';

const galleryImages = [
  { src: '', alt: 'Bright Classroom', category: 'Classrooms' },
  { src: '', alt: 'Reading Corner', category: 'Classrooms' },
  { src: '', alt: 'Smart Board Room', category: 'Classrooms' },
  { src: '', alt: 'Art & Craft Session', category: 'Activities' },
  { src: '', alt: 'Music Class', category: 'Activities' },
  { src: '', alt: 'Outdoor Sports', category: 'Activities' },
  { src: '', alt: 'Yoga Session', category: 'Activities' },
  { src: '', alt: 'Annual Day Performance', category: 'Events' },
  { src: '', alt: 'Sports Day', category: 'Events' },
  { src: '', alt: 'Science Exhibition', category: 'Events' },
  { src: '', alt: 'Diwali Celebration', category: 'Celebrations' },
  { src: '', alt: 'Christmas Party', category: 'Celebrations' },
  { src: '', alt: 'Independence Day', category: 'Celebrations' },
  { src: '', alt: 'Children\'s Day', category: 'Celebrations' },
  { src: '', alt: 'Teacher\'s Day', category: 'Celebrations' },
];

function Gallery() {
  const s = {
    pageHero: {
      background: 'linear-gradient(135deg, #EF476F, #FFD166)',
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
  };

  return (
    <div>
      <section style={s.pageHero}>
        <h1 style={s.heroH1}>Our Gallery</h1>
        <p style={s.heroP}>A glimpse into life at Pacific Global School</p>
      </section>

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionTitle}>
            <h2 style={s.h2}>Moments We Treasure</h2>
            <p style={s.subtitle}>Explore our classrooms, activities, events, and celebrations</p>
            <div style={s.underline} />
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
