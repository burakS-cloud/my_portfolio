import './FooterStyles.css';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p style={{ marginTop: '-.25em' }}>Bursa/Turkey</p>
            </div>
          </div>
          <div
            style={{ display: 'flex', marginBottom: '1em', marginTop: '.5em' }}
            className='phone'
          >
            <h4>
              <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            </h4>
            <p style={{ marginTop: '-.25em' }}>+90 534 065 54 52</p>
          </div>
          <div style={{ display: 'flex' }} className='email'>
            <h4>
              <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            </h4>
            <p style={{ marginTop: '-.3em' }}>bsurumcuoglu@gmail.com</p>
          </div>
        </div>
        <div className='right'>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>About the individual</h4>
          <p>
            This is me, Burak Sürümcüoğlu. Computer Engineering Graduate & Full Stack
            Developer. I'm passionate about learning new tech and expanding my knowledge.
          </p>
          <div style={{ display: 'flex' }} className='social'>
            <FaGithub
              onClick={() => (window.location.href = 'https://github.com/burakS-cloud')}
              size={30}
              style={{ color: '#fff', marginRight: '1rem', cursor: 'pointer' }}
            />
            <FaLinkedin
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/in/burak-s%C3%BCr%C3%BCmc%C3%BCo%C4%9Flu-853a081b4/')
              }
              size={30}
              style={{ color: '#fff', marginRight: '1rem', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
