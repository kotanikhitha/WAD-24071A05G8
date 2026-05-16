import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// --- Navbar Component ---
const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">🩸 BloodSave</Link>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/donors">Donor List</Link>
      <Link to="/request">Request Blood</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login" className="btn-nav">Login</Link>
      <Link to="/register" className="btn-nav" style={{background: '#475569'}}>Register</Link>
    </div>
  </nav>
);

// --- Home Component ---
const Home = () => (
  <div className="page">
    <div className="hero">
      <h1>Donate Blood, Save Lives</h1>
      <p>Your single donation can save up to three lives. Join our community of lifesavers today and make a real difference in the world.</p>
      <div className="hero-btns">
        <Link to="/register" className="btn-primary">Become a Donor</Link>
        <Link to="/request" className="btn-outline">Need Blood?</Link>
      </div>
    </div>
  </div>
);

// --- Login Component ---
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/donors');
  };
  return (
    <div className="page form-wrapper">
      <div className="card">
        <h2>Welcome Back</h2>
        <p>Login to manage your profile</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

// --- Register Component (8 fields) ---
const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate('/login');
  };
  return (
    <div className="page form-wrapper">
      <div className="card wide">
        <h2>Donor Registration</h2>
        <p>Join our community by providing your details below</p>
        <form onSubmit={handleRegister} className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required placeholder="e.g. John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="e.g. john@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required placeholder="Create a password" />
          </div>
          <div className="form-group">
            <label>Blood Group</label>
            <select required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option><option value="A-">A-</option>
              <option value="B+">B+</option><option value="B-">B-</option>
              <option value="O+">O+</option><option value="O-">O-</option>
              <option value="AB+">AB+</option><option value="AB-">AB-</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" required min="18" max="65" placeholder="Must be 18-65" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" required placeholder="e.g. 1234567890" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" required placeholder="e.g. New York" />
          </div>
          <div className="form-group">
            <label>Last Donation Date</label>
            <input type="date" />
          </div>
          <div style={{gridColumn: '1 / -1'}}>
            <button type="submit" className="btn-primary">Register as Donor</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Donor List Component ---
const DonorList = () => {
  const donors = [
    { id: 1, name: "Alice Johnson", blood: "O+", city: "New York", phone: "555-0192" },
    { id: 2, name: "Michael Smith", blood: "A-", city: "Los Angeles", phone: "555-8374" },
    { id: 3, name: "Emma Davis", blood: "B+", city: "Chicago", phone: "555-1029" },
    { id: 4, name: "James Wilson", blood: "AB+", city: "Houston", phone: "555-9482" },
    { id: 5, name: "Sophia Brown", blood: "O-", city: "Phoenix", phone: "555-4728" },
    { id: 6, name: "William Miller", blood: "A+", city: "Philadelphia", phone: "555-6631" },
  ];

  return (
    <div className="page">
      <h1 className="page-title">Available Donors</h1>
      <p className="page-subtitle">Find registered blood donors in your area</p>
      <div className="donors-grid">
        {donors.map(donor => (
          <div className="donor-card" key={donor.id}>
            <div className="donor-blood">{donor.blood}</div>
            <div className="donor-info">
              <h3>{donor.name}</h3>
              <p><strong>City:</strong> {donor.city}</p>
              <p><strong>Contact:</strong> {donor.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Request Blood Component ---
const RequestBlood = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleRequest = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page form-wrapper">
      <div className="card wide">
        <h2>Request Blood</h2>
        <p>Submit a request and we will notify nearby donors</p>
        {submitted && <div className="success-msg">Your blood request has been successfully submitted!</div>}
        <form onSubmit={handleRequest} className="form-grid">
          <div className="form-group">
            <label>Patient Name</label>
            <input type="text" required placeholder="Name of patient" />
          </div>
          <div className="form-group">
            <label>Blood Group Required</label>
            <select required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option><option value="A-">A-</option>
              <option value="B+">B+</option><option value="B-">B-</option>
              <option value="O+">O+</option><option value="O-">O-</option>
              <option value="AB+">AB+</option><option value="AB-">AB-</option>
            </select>
          </div>
          <div className="form-group">
            <label>Hospital Name & Address</label>
            <input type="text" required placeholder="Where is blood needed?" />
          </div>
          <div className="form-group">
            <label>Urgency Level</label>
            <select required>
              <option value="Normal">Normal (Within 2 days)</option>
              <option value="Urgent">Urgent (Within 24 hours)</option>
              <option value="Critical">Critical (Immediate)</option>
            </select>
          </div>
          <div className="form-group" style={{gridColumn: '1 / -1'}}>
            <label>Additional Notes</label>
            <textarea rows="3" placeholder="Any other specific requirements..."></textarea>
          </div>
          <div style={{gridColumn: '1 / -1'}}>
            <button type="submit" className="btn-primary">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Contact Component ---
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleContact = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page form-wrapper">
      <div className="card">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our support team.</p>
        {submitted && <div className="success-msg">Message sent successfully!</div>}
        <form onSubmit={handleContact}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" required placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donors" element={<DonorList />} />
            <Route path="/request" element={<RequestBlood />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer style={{ textAlign: 'center', padding: '20px', background: '#1e293b', color: '#ffffff', marginTop: 'auto' }}>
          <strong>Roll No: 24071A05G8 - KOTANIKHITHA</strong>
        </footer>
      </div>
    </Router>
  );
}
