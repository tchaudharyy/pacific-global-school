import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const programs = ['Playgroup', 'Nursery', 'Junior KG', 'Senior KG', 'Grade 1-2', 'Grade 3-4'];

const initialState = {
  parentName: '', parentEmail: '', parentPhone: '',
  childName: '', childDob: '', childGender: '',
  program: '', previousSchool: '', message: '',
};

function RegistrationForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.parentName.trim()) errs.parentName = 'Parent name is required';
    if (!form.parentEmail.trim()) errs.parentEmail = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.parentEmail)) errs.parentEmail = 'Invalid email format';
    if (!form.parentPhone.trim()) errs.parentPhone = 'Phone is required';
    else if (!/^\d{10}$/.test(form.parentPhone)) errs.parentPhone = 'Enter a valid 10-digit phone number';
    if (!form.childName.trim()) errs.childName = 'Child name is required';
    if (!form.childDob) errs.childDob = 'Date of birth is required';
    if (!form.program) errs.program = 'Please select a program';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('/api/register', form);
      toast.success(res.data.message);
      setForm(initialState);
      setErrors({});
    } catch (err) {
      const message = err.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    form: {
      background: '#fff',
      padding: 40,
      borderRadius: 16,
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
    title: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#004E89',
      marginBottom: 25,
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 20,
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontWeight: 600,
      fontSize: '0.9rem',
      color: '#2D3436',
      marginBottom: 6,
      fontFamily: "'Poppins', sans-serif",
    },
    required: {
      color: '#EF476F',
    },
    input: {
      padding: '12px 16px',
      borderRadius: 10,
      border: '1px solid #ddd',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
      outline: 'none',
    },
    inputError: {
      borderColor: '#EF476F',
    },
    error: {
      color: '#EF476F',
      fontSize: '0.8rem',
      marginTop: 4,
    },
    fullWidth: {
      gridColumn: '1 / -1',
    },
    textarea: {
      padding: '12px 16px',
      borderRadius: 10,
      border: '1px solid #ddd',
      fontSize: '1rem',
      minHeight: 100,
      resize: 'vertical',
      outline: 'none',
    },
    btn: {
      background: loading ? '#ccc' : '#FF6B35',
      color: '#fff',
      padding: '14px 40px',
      borderRadius: 30,
      border: 'none',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '1.05rem',
      cursor: loading ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s',
      width: '100%',
      marginTop: 10,
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h3 style={styles.title}>Registration Form</h3>
      <div style={styles.grid}>
        <div style={styles.field}>
          <label style={styles.label}>Parent Name <span style={styles.required}>*</span></label>
          <input style={{ ...styles.input, ...(errors.parentName ? styles.inputError : {}) }}
            name="parentName" value={form.parentName} onChange={handleChange} placeholder="Enter parent name" />
          {errors.parentName && <span style={styles.error}>{errors.parentName}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Email <span style={styles.required}>*</span></label>
          <input style={{ ...styles.input, ...(errors.parentEmail ? styles.inputError : {}) }}
            name="parentEmail" type="email" value={form.parentEmail} onChange={handleChange} placeholder="Enter email address" />
          {errors.parentEmail && <span style={styles.error}>{errors.parentEmail}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Phone <span style={styles.required}>*</span></label>
          <input style={{ ...styles.input, ...(errors.parentPhone ? styles.inputError : {}) }}
            name="parentPhone" value={form.parentPhone} onChange={handleChange} placeholder="Enter phone number" />
          {errors.parentPhone && <span style={styles.error}>{errors.parentPhone}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Child Name <span style={styles.required}>*</span></label>
          <input style={{ ...styles.input, ...(errors.childName ? styles.inputError : {}) }}
            name="childName" value={form.childName} onChange={handleChange} placeholder="Enter child name" />
          {errors.childName && <span style={styles.error}>{errors.childName}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Date of Birth <span style={styles.required}>*</span></label>
          <input style={{ ...styles.input, ...(errors.childDob ? styles.inputError : {}) }}
            name="childDob" type="date" value={form.childDob} onChange={handleChange} />
          {errors.childDob && <span style={styles.error}>{errors.childDob}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Gender</label>
          <select style={styles.input} name="childGender" value={form.childGender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Program <span style={styles.required}>*</span></label>
          <select style={{ ...styles.input, ...(errors.program ? styles.inputError : {}) }}
            name="program" value={form.program} onChange={handleChange}>
            <option value="">Select a program</option>
            {programs.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.program && <span style={styles.error}>{errors.program}</span>}
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Previous School</label>
          <input style={styles.input} name="previousSchool" value={form.previousSchool} onChange={handleChange}
            placeholder="If applicable" />
        </div>
        <div style={{ ...styles.field, ...styles.fullWidth }}>
          <label style={styles.label}>Message / Special Requirements</label>
          <textarea style={styles.textarea} name="message" value={form.message} onChange={handleChange}
            placeholder="Any additional information..." />
        </div>
        <div style={styles.fullWidth}>
          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegistrationForm;
