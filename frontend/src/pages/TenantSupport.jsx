import React, { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const TenantSupport = () => {
  const [activeForm, setActiveForm] = useState('maintenance');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/tenant-support`, {
        ...formData,
        type: activeForm
      });
      
      if (response.data.success) {
        toast.success('Your request has been submitted. We will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit. Please try again or call us directly.');
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
    <div className="tenant-support-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '48px' }}>
            Tenant Support
          </h1>

          <div className="support-content">
            <div className="support-tabs">
              <button
                className={`support-tab ${activeForm === 'maintenance' ? 'active' : ''}`}
                onClick={() => setActiveForm('maintenance')}
              >
                Maintenance Coordination
              </button>
              <button
                className={`support-tab ${activeForm === 'enquiry' ? 'active' : ''}`}
                onClick={() => setActiveForm('enquiry')}
              >
                General Enquiries
              </button>
            </div>

            <div className="support-form-wrapper">
              <form onSubmit={handleSubmit} className="support-form">
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
                  <label htmlFor="address" className="body-regular">Property Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="body-regular">
                    {activeForm === 'maintenance' && 'Maintenance Details *'}
                    {activeForm === 'enquiry' && 'Your Enquiry *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenantSupport;
