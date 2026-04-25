import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = { name: '', email: '', phone: '', subject: '', message: '' };

function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      const res = await axios.post('/api/contact', form);
      toast.success(res.data.message);
      setForm(initialState);
      setErrors({});
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    form: { background: '#fff', padding: 40, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
    title: { fontFamily: "'Poppins', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#004E89', marginBottom: 25 },
    field: { display: 'flex', flexDirection: 'column', marginBottom: 18 },
    label: { fontWeight: 600, fontSize: '0.9rem', color: '#2D3436', marginBottom: 6, fontFamily: "'Poppins', sans-serif" },
    required: { color: '#EF476F' },
    input: { padding: '12px 16px', borderRadius: 10, border: '1px solid #ddd', fontSize: '1rem', outline: 'none' },
    inputError: { borderColor: '#EF476F' },
    error: { color: '#EF476F', fontSize: '0.8rem', marginTop: 4 },
    textarea: { padding: '12px 16px', borderRadius: 10, border: '1px solid #ddd', fontSize: '1rem', minHeight: 120, resize: 'vertical', outline: 'none' },
    btn: {
      background: loading ? '#ccc' : '#FF6B35', color: '#fff', padding: '14px 40px', borderRadius: 30, border: 'none',
      fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem',
      cursor: loading ? 'not-allowed' : 'pointer', width: '100%', marginTop: 5,
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h3 style={styles.title}>Send Us a Message</h3>
      <div style={styles.field}>
        <label style={styles.label}>Name <span style={styles.required}>*</span></label>
        <input style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
          name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        {errors.name && <span style={styles.error}>{errors.name}</span>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
        <div style={styles.field}>
          <label style={styles.label}>Email <span style={styles.required}>*</span></label>
          <input style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
            name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Phone</label>
          <input style={styles.input} name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone" />
        </div>
      </div>
      <div style={styles.field}>
        <label style={styles.label}>Subject <span style={styles.required}>*</span></label>
        <input style={{ ...styles.input, ...(errors.subject ? styles.inputError : {}) }}
          name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
        {errors.subject && <span style={styles.error}>{errors.subject}</span>}
      </div>
      <div style={styles.field}>
        <label style={styles.label}>Message <span style={styles.required}>*</span></label>
        <textarea style={{ ...styles.textarea, ...(errors.message ? styles.inputError : {}) }}
          name="message" value={form.message} onChange={handleChange} placeholder="Your message..." />
        {errors.message && <span style={styles.error}>{errors.message}</span>}
      </div>
      <button type="submit" style={styles.btn} disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
