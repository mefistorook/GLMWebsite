import React from 'react';

const Media = () => {
  const properties = [
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/f6iqiypu_208e29b5-9b96-4a76-bf6a-9682d86cef21.JPG',
      caption: 'Elegant Bedrooms'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/5gth3wd1_Luxurious%20living%20hall.jpeg',
      caption: 'Luxurious living spaces'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/zwy655k0_IMG_2146.jpg',
      caption: 'High-Design Kitchens'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/palijsiw_Workspace.JPG',
      caption: 'Bright workspaces'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/3ifgcsna_Bathroom.JPG',
      caption: 'Stylish Bathrooms'
    }
  ];

  const logoUrl = 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/kcyldvtx_WhatsApp%20Image%202026-03-10%20at%208.23.52%20AM%20%281%29.jpeg';

  return (
    <div className="media-page">
      <section className="section-padding">
        <div className="container">
          <div className="media-header">
            <img src={logoUrl} alt="Goldline Management" className="media-logo" />
            <h1 className="hero-medium" style={{ marginTop: '32px', marginBottom: '24px' }}>
              Property Portfolio
            </h1>
            <p className="body-large" style={{ marginBottom: '80px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
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
