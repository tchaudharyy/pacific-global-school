import { useState } from 'react';

const placeholderColors = ['#FF6B35', '#004E89', '#FFD166', '#06D6A0', '#EF476F', '#7B61FF'];

function GalleryGrid({ images = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  const filtered = activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory);

  const styles = {
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      marginBottom: 40,
      flexWrap: 'wrap',
    },
    tab: (active) => ({
      padding: '10px 24px',
      borderRadius: 30,
      border: 'none',
      background: active ? '#FF6B35' : '#fff',
      color: active ? '#fff' : '#636E72',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: active ? '0 4px 12px rgba(255,107,53,0.3)' : '0 2px 8px rgba(0,0,0,0.06)',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 20,
    },
    card: {
      borderRadius: 12,
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s',
    },
    placeholder: (idx) => ({
      width: '100%',
      height: 200,
      background: `linear-gradient(135deg, ${placeholderColors[idx % placeholderColors.length]}, ${placeholderColors[(idx + 2) % placeholderColors.length]})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
    }),
    label: {
      padding: '12px 15px',
      background: '#fff',
      fontWeight: 500,
      color: '#2D3436',
      fontSize: '0.9rem',
    },
    modal: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: 20,
    },
    modalContent: {
      background: '#fff',
      borderRadius: 16,
      padding: 20,
      maxWidth: 600,
      width: '100%',
      textAlign: 'center',
    },
    modalPlaceholder: (idx) => ({
      width: '100%',
      height: 350,
      borderRadius: 12,
      background: `linear-gradient(135deg, ${placeholderColors[idx % placeholderColors.length]}, ${placeholderColors[(idx + 2) % placeholderColors.length]})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.3rem',
    }),
    closeBtn: {
      marginTop: 15,
      padding: '10px 30px',
      borderRadius: 30,
      background: '#FF6B35',
      color: '#fff',
      border: 'none',
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: "'Poppins', sans-serif",
    },
    empty: {
      textAlign: 'center',
      color: '#636E72',
      padding: 40,
      fontSize: '1.1rem',
    },
  };

  return (
    <div>
      <div style={styles.tabs}>
        {categories.map((cat) => (
          <button key={cat} style={styles.tab(activeCategory === cat)} onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={styles.empty}>No images in this category yet.</p>
      ) : (
        <div style={styles.grid}>
          {filtered.map((img, idx) => (
            <div key={idx} style={styles.card} onClick={() => setSelectedImage({ ...img, idx })}>
              <div style={styles.placeholder(idx)}>{img.alt}</div>
              <div style={styles.label}>{img.alt}</div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalPlaceholder(selectedImage.idx)}>{selectedImage.alt}</div>
            <p style={{ margin: '15px 0 5px', fontWeight: 600, color: '#2D3436' }}>{selectedImage.alt}</p>
            <p style={{ color: '#636E72', fontSize: '0.9rem' }}>{selectedImage.category}</p>
            <button style={styles.closeBtn} onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;
