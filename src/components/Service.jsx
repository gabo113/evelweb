import React from 'react';
import '../css/Style.css';
import { IonIcon } from '@ionic/react';
import { chatbox, desktop, bulb, phonePortrait, archive, build } from 'ionicons/icons';

const services = [
  {
    id: 1,
    title: 'SEO Optimization',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    icon: chatbox,
    bgColor: '#13c4a1',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    icon: desktop,
    bgColor: '#6610f2',
  },
  {
    id: 3,
    title: 'Market Research',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    icon: bulb,
    bgColor: '#ffb700',
  },
  {
    id: 4,
    title: 'Keyword Targeting',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    icon: phonePortrait,
    bgColor: '#fc3549',
  },
  {
    id: 5,
    title: 'Email Marketing',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    icon: archive,
    bgColor: '#00d280',
  },
  {
    id: 6,
    title: 'Marketing & Reporting',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    icon: build,
    bgColor: '#ff612f',
  },
];

const Service = () => {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title">Services We Provided</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <ul className="grid-list">
          {services.map((service) => (
            <li key={service.id}>
              <div className="service-card">
                <div className="card-icon" style={{ backgroundColor: service.bgColor }}>
                  <IonIcon icon={service.icon} />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">{service.title}</a>
                </h3>
                <p className="card-text">
                  {service.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
