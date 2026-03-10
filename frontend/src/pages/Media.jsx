import React from 'react';

const Media = () => {
  const properties = [
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/5gth3wd1_Luxurious%20living%20hall.jpeg',
      caption: 'Luxurious Living Hall'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/rsb8zgz8_Neat%20classy%20bathrooms.jpeg',
      caption: 'Neat Classy Bathrooms'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/zwy655k0_IMG_2146.jpg',
      caption: 'Premium Kitchen Design'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/aewl4g0e_6e8086aa-b1e0-41d7-b0b2-6d46d87a93e0.JPG',
      caption: 'Modern Kitchen & Living Area'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/f6iqiypu_208e29b5-9b96-4a76-bf6a-9682d86cef21.JPG',
      caption: 'Elegant Bedroom Suite'
    }
  ];

  const logoUrl = 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/kcyldvtx_WhatsApp%20Image%202026-03-10%20at%208.23.52%20AM%20%281%29.jpeg';

  return (
    <div className="media-page">
      <section className="section-padding">
        <div className="container">
          <div className="media-header">
            <img src={logoUrl} alt="Goldline Management" className="media-logo" />
            <h1 className="hero-medium" style={{ marginTop: '32px', marginBottom: '48px' }}>
              Property Portfolio
            </h1>
            <p className="body-large" style={{ marginBottom: '80px', maxWidth: '700px' }}>
              A curated showcase of professionally managed properties, each structured for operational 
              excellence and tenant satisfaction.
            </p>
          </div>

          <div className="media-grid">
            {properties.map((property, index) => (
              <div key={index} className="media-card">
                <div className="media-image-wrapper">
                  <img 
                    src={property.image} 
                    alt={property.caption}
                    className="media-image"
                  />
                </div>
                <p className="body-regular media-caption">
                  {property.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Logo watermark section */}
          <div className="media-footer">
            <img src={logoUrl} alt="Goldline Management" className="media-watermark" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
