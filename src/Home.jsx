import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1 className="fw-bold">Conway's Game of Life</h1>
        <p className="lead text-muted">Fun game and weird progression.</p>
        <Link className="btn btn-outline-success btn-lg" to="/game" role="button">Begin Game Here</Link>
      </section>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">The Rules of the Game</h5>
            </div>
            <div className="card-body">
              <ul className="card-text">
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">The Team behind the Scene</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Meet the people that worked and helped.</p>
              <Link to="/credits" className="btn btn-outline-primary">Discover More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
