import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-large">Goldline Management Limited</h1>
            <p className="hero-subtitle">
              Structured Property Operations. Engineered for Performance.
            </p>
            <p className="body-large" style={{ marginTop: '32px', maxWidth: '700px' }}>
              Operational oversight, tenant coordination, and revenue optimisation across a growing 
              portfolio of professionally managed residential assets.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/approach')}>
                Explore Our Approach
              </button>
              <button className="btn-secondary" onClick={() => navigate('/consultation')}>
                Request Consultation
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="positioning-section section-padding-small">
        <div className="container">
          <div className="grid-two-column">
            <div>
              <h2 className="heading-1">Built on Structure. Driven by Detail.</h2>
            </div>
            <div>
              <p className="body-large">
                Goldline Management Limited oversees a portfolio of 50+ residential properties through 
                disciplined operational systems and performance-focused management frameworks.
              </p>
              <p className="body-large" style={{ marginTop: '24px' }}>
                We don't operate casually.<br />
                We implement structure, clarity, and measurable standards across every asset we support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding-small">
        <div className="container">
          <h2 className="heading-1" style={{ marginBottom: '48px' }}>
            Property Operations & Asset Performance
          </h2>
          <p className="body-large" style={{ marginBottom: '40px' }}>
            We provide structured operational management across:
          </p>
          <div className="services-grid">
            <div className="service-item">
              <CheckCircle2 size={20} strokeWidth={1.5} />
              <span className="body-large">Tenant coordination & oversight</span>
            </div>
            <div className="service-item">
              <CheckCircle2 size={20} strokeWidth={1.5} />
              <span className="body-large">Property compliance structuring</span>
            </div>
            <div className="service-item">
              <CheckCircle2 size={20} strokeWidth={1.5} />
              <span className="body-large">Revenue optimisation strategy</span>
            </div>
            <div className="service-item">
              <CheckCircle2 size={20} strokeWidth={1.5} />
              <span className="body-large">Asset presentation & performance enhancement</span>
            </div>
            <div className="service-item">
              <CheckCircle2 size={20} strokeWidth={1.5} />
              <span className="body-large">Strategic short-term revenue channels (where appropriate)</span>
            </div>
          </div>
          <p className="body-large" style={{ marginTop: '40px', fontStyle: 'italic' }}>
            Our approach is methodical, not reactive.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section-padding-small">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="heading-1">Every Detail Is Intentional</h2>
            <p className="body-large" style={{ marginTop: '24px' }}>
              From entry experience to lighting tone, from tenant onboarding flow to maintenance systems — 
              every operational layer is designed with precision.
            </p>
            <p className="body-large" style={{ marginTop: '24px', fontStyle: 'italic' }}>
              Performance is not accidental.<br />
              It is engineered.
            </p>
          </div>
        </div>
      </section>

      {/* Scale Indicators */}
      <section className="scale-section section-padding-small">
        <div className="container">
          <div className="scale-grid">
            <div className="scale-item">
              <h3 className="heading-2">50+</h3>
              <p className="body-regular">Properties Managed</p>
            </div>
            <div className="scale-item">
              <h3 className="heading-2">Structured</h3>
              <p className="body-regular">Operational Framework</p>
            </div>
            <div className="scale-item">
              <h3 className="heading-2">Performance</h3>
              <p className="body-regular">Driven Strategy</p>
            </div>
            <div className="scale-item">
              <h3 className="heading-2">Growth</h3>
              <p className="body-regular">Portfolio Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <h2 className="heading-1" style={{ marginBottom: '48px' }}>Landlord Feedback</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p className="body-large">
                "Goldline transformed the operational structure of our property. Communication improved, 
                performance improved, and stress reduced entirely."
              </p>
              <p className="body-small testimonial-author">— David Connolly</p>
            </div>
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p className="body-large">
                "The level of detail and systemisation is unlike traditional management."
              </p>
              <p className="body-small testimonial-author">— Arif Mohammed</p>
            </div>
          </div>

          <h2 className="heading-1" style={{ marginTop: '80px', marginBottom: '48px' }}>Tenant Feedback</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p className="body-large">
                "Maintenance and response is prompt and we always trust Goldline with our housing in such a difficult market."
              </p>
              <p className="body-small testimonial-author">— Nian Dravidan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Structured Management Starts with Clarity.</h2>
            <p className="body-large" style={{ marginTop: '24px' }}>
              If you are seeking disciplined operational oversight and long-term asset performance, 
              we welcome an initial consultation.
            </p>
            <button 
              className="btn-primary" 
              style={{ marginTop: '40px' }}
              onClick={() => navigate('/consultation')}
            >
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
