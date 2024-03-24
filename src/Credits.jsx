import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 bg-primary text-light">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Learn more about the team and motivation behind our application.</p>
      </div>
      
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">Our Mission</h5>
          <p className="card-text">Our mission is to create innovatively.</p>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">The Team</h5>
          <p className="card-text">A group of enthusiasts driven by curiosity and a love for coding:</p>
          <ul>
            <li>Chung - Lead Developer</li>
            <li>Ang - UX/UI Designer</li>
            <li>Tsao - Data Analyst</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">Acknowledgments</h5>
          <p className="card-text">We are grateful for the support from various individuals and organizations:</p>
          <ul>
            <li>Our beta testers</li>
            <li>Our families and friends</li>
            <li>Our wonderful open sources</li>
            <li>Our friend google and the internet</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">Find Us Online</h5>
          <p className="card-text">Follow our journey and stay updated with our latest projects:</p>
          <ul>
            <li><a href="https://github.com/tsao90148" target="_blank" rel="noopener noreferrer">Our Project on GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
