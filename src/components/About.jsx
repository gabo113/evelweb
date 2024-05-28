import React from 'react';
import '../css/Style.css';
import { IonIcon } from '@ionic/react';
import { play, checkmarkCircle } from 'ionicons/icons';

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <div className="about-banner img-holder" style={{ '--width': 720, '--height': 960 }}>
          <img
            src="./assets/images/about-banner.jpg"
            width="720"
            height="960"
            loading="lazy"
            alt="about banner"
            className="img-cover"
          />
          <button className="play-btn" aria-label="Play video">
            <IonIcon icon={play} aria-hidden="true" />
          </button>
        </div>

        <div className="about-content">
          <h2 className="h2 section-title">About Us</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tincidunt nec eleifend et tiram.
          </p>

          <h3 className="h3">Who We Are</h3>
          <p className="section-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <h3 className="h3">Our Success</h3>
          <ul className="about-list">
            <li className="about-item">
              <IonIcon icon={checkmarkCircle} aria-hidden="true" />
              <p className="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
            <li className="about-item">
              <IonIcon icon={checkmarkCircle} aria-hidden="true" />
              <p className="section-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </li>
            <li className="about-item">
              <IonIcon icon={checkmarkCircle} aria-hidden="true" />
              <p className="section-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
            </li>
          </ul>

          <h3 className="h3">Our Mission</h3>
          <p className="section-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
