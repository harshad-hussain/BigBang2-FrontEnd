import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Aboutpage.css';


import { faHospital, faClinicMedical, faVial, faPills, faBed, faStethoscope, faUserMd, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutPage = () => {
  const imageUrls = [
    'https://i.pinimg.com/originals/ea/7f/2d/ea7f2dd47969349da148ea0b4ec56815.gif',
    'https://i.pinimg.com/originals/ea/7f/2d/ea7f2dd47969349da148ea0b4ec56815.gif',
    'https://i.pinimg.com/564x/d7/11/71/d71171c9e3f1acb600314e7225675585.jpg'
  ];

  return (
    <div className="about-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#blogs"></a>
          </li>
          <li className="navbar-item">
            <a href="#services"></a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <Carousel showThumbs={false} infiniteLoop={true} className="carousel">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="slide">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="slide-image"
            />
            <div className="slide-text">
              <p>
                “A good laugh and a long sleep are the best cures in the doctor's book. Let food be thy medicine and medicine be thy food.” –------ Ralph Waldo Emerson
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="cards-container">
        <div className="card-new">
          <h3>
            <FontAwesomeIcon icon={faHospital} />
            73+
          </h3>
          <h5>Largest private healthcare network of Hospitals</h5>
          <br></br>
          <h5>0The hospital that cares
We are here to hear and heal your health problems
It is not only about the money
More than just treating patients
The best doctors on the planet
</h5>
        </div>
        <div className="card-new">
          <h3>
            <FontAwesomeIcon icon={faClinicMedical} />
            400+
          </h3>
          <h5>Empowering People to Improve Their Lives. ...</h5>
          <br></br>
          <h5>We collaborate for better healthcare
Healthcare at its finest
We work for complete healing
Our passion is to heal</h5>
        </div>
        <div className="card-new">
          <h3>
            <FontAwesomeIcon icon={faVial} />
            1,100+
          </h3>
          <h4>Diagnostic centres across India</h4>
          <br></br>
          <h5>We collaborate for better healthcare
Healthcare at its finest
We work for complete healing
Our passion is to heal</h5>
        </div>
        <div className="card-new">
          <h3>
            <FontAwesomeIcon icon={faPills} />
            5,000+
          </h3>
          <h4>Pharmacies</h4>
          <br></br>
          <h5>We provide a hospital experience at par with global standards using cutting-edge technologies for invasive as well as non-invasive treatments.</h5>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <h3>Why Choose Us?</h3>
          <p>
            For our international patients, we offer unparalleled clinical excellence and hospital experience. We are located across major cities in India with good connectivity, offering ease of travel and stay at affordable prices We cater to our patients with quality and timely medical care to give them an unforgettable positive experience.

            Global Hospitals is the healthcare destination of choice for a great number of international patients coming to India. We offer cutting-edge technology, extensive research resources, and world-class options to our patients and strive to create a positive, compassionate environment for patients and their families.
          </p>
          <div className="footer-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="footer-stats">
            <div className="footer-stat">
              <FontAwesomeIcon icon={faBed} />
              <span>10,000+</span>
              <h3>Beds</h3>
            </div>
            <div className="footer-stat">
              <FontAwesomeIcon icon={faStethoscope} />
              <span>7,000+</span>
              <h3>Docs</h3>
            </div>
            <div className="footer-stat">
              <FontAwesomeIcon icon={faUserMd} />
              <span>10,000+</span>
              <h3>Support Staff</h3>
            </div>
          </div>
        </div>
      </footer>
      <Link to="/chooselogin" className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} size="3x" />
      </Link>
    </div>
  );
};

export default AboutPage;