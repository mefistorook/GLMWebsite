import React, { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/consultation`, formData);
      if (response.data.success) {
        toast.success('Your consultation request has been submitted. We will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="consultation-page">
      <section className="section-padding">
        <div className="container">
          <div className="consultation-header">
            <h1 className="hero-medium">Request Consultation</h1>
            <p className="body-large" style={{ marginTop: '24px', maxWidth: '700px' }}>
              Get in touch with our team to discuss your property management needs. 
              We'll respond to your enquiry within 24 hours.
            </p>
          </div>

          <div className="consultation-form-wrapper">
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-group">
                <label htmlFor="name" className="body-regular">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="body-regular">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="body-regular">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="+353 XX XXX XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="body-regular">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell us about your property management needs..."
                />
              </div>

              <button type="submit" className="btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Consultation Request'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
