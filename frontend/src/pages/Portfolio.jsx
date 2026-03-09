import React from 'react';

const Portfolio = () => {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzMwOTA3Nzl8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Structured Entry Experience'
    },
    {
      image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzMwOTA3Nzl8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Optimised Bedroom Lighting'
    },
    {
      image: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzMwOTA3Nzl8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Functional Living Layout'
    },
    {
      image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzMwOTA3Nzl8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Precision Clean Standards'
    },
    {
      image: 'https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      caption: 'Thoughtful Spatial Design'
    },
    {
      image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzMwOTA3Nzl8MA&ixlib=rb-4.1.0&q=85',
      caption: 'Contemporary Design Excellence'
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '48px' }}>
            Managed Portfolio
          </h1>
          <p className="body-large" style={{ marginBottom: '80px', maxWidth: '700px' }}>
            A curated showcase of professionally managed properties, each structured for operational 
            excellence and tenant satisfaction.
          </p>

          <div className="portfolio-grid">
            {properties.map((property, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image-wrapper">
                  <img 
                    src={property.image} 
                    alt={property.caption}
                    className="portfolio-image"
                  />
                </div>
                <p className="body-regular portfolio-caption">
                  {property.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
