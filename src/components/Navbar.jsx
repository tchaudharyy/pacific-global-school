import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    topBar: {
      background: '#004E89',
      color: '#fff',
      padding: '8px 0',
      fontSize: '0.85rem',
    },
    topBarInner: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 20,
      alignItems: 'center',
    },
    topBarItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: '#fff',
    },
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#fff',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      transition: 'box-shadow 0.3s ease',
    },
    inner: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 70,
    },
    logo: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 800,
      color: '#004E89',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    logoAccent: {
      color: '#FF6B35',
    },
    links: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      listStyle: 'none',
    },
    link: {
      textDecoration: 'none',
      color: '#2D3436',
      fontWeight: 500,
      fontSize: '0.95rem',
      fontFamily: "'Poppins', sans-serif",
      transition: 'color 0.3s',
      padding: '5px 0',
      borderBottom: '2px solid transparent',
    },
    activeLink: {
      color: '#FF6B35',
      borderBottom: '2px solid #FF6B35',
    },
    enrollBtn: {
      background: '#FF6B35',
      color: '#fff',
      padding: '10px 24px',
      borderRadius: 30,
      fontWeight: 600,
      fontSize: '0.9rem',
      fontFamily: "'Poppins', sans-serif",
      textDecoration: 'none',
      transition: 'all 0.3s',
    },
    hamburger: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#004E89',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: '#fff',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 25,
    },
    closeBtn: {
      position: 'absolute',
      top: 20,
      right: 20,
      background: 'none',
      border: 'none',
      fontSize: '1.8rem',
      cursor: 'pointer',
      color: '#004E89',
    },
    mobileLink: {
      textDecoration: 'none',
      color: '#2D3436',
      fontWeight: 600,
      fontSize: '1.2rem',
      fontFamily: "'Poppins', sans-serif",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          .top-bar-desktop { display: none !important; }
        }
      `}</style>
      <div style={styles.topBar} className="top-bar-desktop">
        <div style={styles.topBarInner}>
          <span style={styles.topBarItem}>
            <FaPhone size={12} /> 8851723725
          </span>
          <span style={styles.topBarItem}>
            <FaEnvelope size={12} /> tanyachaudhary9911@gmail.com
          </span>
        </div>
      </div>
      <nav style={styles.nav}>
        <div style={styles.inner}>
          <Link to="/" style={styles.logo}>
            <span style={styles.logoAccent}>Pacific</span> Global School
          </Link>
          <ul style={styles.links} className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    ...styles.link,
                    ...(isActive ? styles.activeLink : {}),
                  })}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/admissions" style={styles.enrollBtn}>
                Enroll Now
              </Link>
            </li>
          </ul>
          <button
            style={styles.hamburger}
            className="nav-hamburger"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div style={styles.mobileMenu}>
          <button style={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={styles.mobileLink}
              onClick={() => setIsOpen(false)}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            style={styles.enrollBtn}
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
