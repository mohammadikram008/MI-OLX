import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Swat</li>
              <li>Dir</li>
              <li>Bunner</li>
              <li>Shangla</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About MI Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>MIPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>MI</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Countries Pakistan</p>
        <p>Free Classifieds in Pakistan. © 2023 MI</p>
      </div>
    </div>
  );
}

export default Footer;
