import React, { useState } from 'react';

const TenantSupportFormSubmit = () => {
  const [activeForm, setActiveForm] = useState('maintenance');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const requestType = activeForm === 'maintenance' ? 'Maintenance Request' : 'General Enquiry';

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
              <form 
                action="https://formsubmit.co/info@goldlinemanagement.com"
                method="POST"
                className="support-form"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value={`Tenant Support - ${requestType}`} />
                <input type="hidden" name="_next" value="https://goldlinemanagement.com?submitted=true" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="Request Type" value={requestType} />

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
                    name="Property Address"
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

                <button type="submit" className="btn-primary">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenantSupportFormSubmit;
