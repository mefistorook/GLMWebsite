import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '80px' }}>
            The Discipline Behind Goldline
          </h1>

          <div className="about-content">
            <p className="body-large">
              Goldline Management Limited was built on the belief that property performance is 
              directly linked to operational structure.
            </p>

            <p className="body-large" style={{ marginTop: '32px' }}>
              Rather than reactive management, we implement defined systems, communication protocols, 
              and asset oversight strategies that support long-term stability.
            </p>

            <div className="philosophy-box">
              <h2 className="heading-2" style={{ marginBottom: '32px' }}>
                Our philosophy is simple:
              </h2>
              <div className="philosophy-points">
                <p className="body-large philosophy-point">
                  Clarity reduces friction.
                </p>
                <p className="body-large philosophy-point">
                  Structure improves performance.
                </p>
                <p className="body-large philosophy-point">
                  Detail defines quality.
                </p>
              </div>
            </div>

            <div className="values-section">
              <h2 className="heading-2" style={{ marginBottom: '32px' }}>
                Built on Principles
              </h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3 className="heading-3">Precision</h3>
                  <p className="body-regular">
                    Every operational detail is considered, measured, and optimised for performance.
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="heading-3">Transparency</h3>
                  <p className="body-regular">
                    Clear communication channels and defined expectations across all stakeholder relationships.
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="heading-3">Accountability</h3>
                  <p className="body-regular">
                    Structured oversight systems ensure consistent service delivery and measurable outcomes.
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="heading-3">Innovation</h3>
                  <p className="body-regular">
                    Strategic implementation of revenue optimization and operational efficiency models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
