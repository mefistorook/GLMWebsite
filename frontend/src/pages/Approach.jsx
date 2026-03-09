import React from 'react';
import { Building2, Users, TrendingUp, Sparkles } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      icon: <Building2 size={32} strokeWidth={1.5} />,
      title: 'Asset Structuring',
      description: 'Each property is evaluated and structured for operational efficiency and long-term sustainability.'
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: 'Tenant Coordination Systems',
      description: 'Clear onboarding processes, communication standards, and defined maintenance channels.'
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: 'Revenue Optimisation',
      description: 'Where suitable, strategic revenue models are implemented to enhance asset performance — including mid-term and short-term accommodation channels.'
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: 'Presentation & Experience',
      description: 'Property flow, lighting, layout efficiency, and environmental tone are all intentionally considered.'
    }
  ];

  return (
    <div className="approach-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '80px' }}>
            Operational Framework
          </h1>

          <div className="approach-grid">
            {approaches.map((item, index) => (
              <div key={index} className="approach-card">
                <div className="approach-icon">
                  {item.icon}
                </div>
                <h3 className="heading-2">{index + 1}. {item.title}</h3>
                <p className="body-large" style={{ marginTop: '16px' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
