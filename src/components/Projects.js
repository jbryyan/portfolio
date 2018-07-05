import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';
import { Navbar } from './_index';
import '../styles/Projects.css';
import data from '../data/data.json';
import image1 from '../images/nightlife-1.png';
import image2 from '../images/nightlife-2.png';
import projects from '../assets/projects.json';

class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <div className='projects-navbar'>
          <h1 className='projects-header'>Bryan Juarez Projects</h1>
          <div className='projects-links'>
            <a href='fullstack'>Fullstack Projects</a>
            <a href='frontend'>Frontend Projects</a>
            <a href='data-visualization'>Data Visualization Projects</a>
          </div>
        </div>
        <div className='list-container'>
          <div className='list-item'>
            <div className='list-images '>
              <a href={data[0].link}>
                <img className='list-image-home' src={projects[0].image} />
                <img className='list-image-main' src={projects[0].image1} />
              </a>
            </div>
            <div className='list-description'>
              <div className='description-text'>
                <h2>Nightlife App</h2>
                <p>A full stack project that allows users to search for nightlife venues in a specific city and save up their plans.</p>
                <p>Techstack: React + Redux + SemanticUI React + Node.js + Express + MongoDB</p>
                <p>Website | Repo </p>
              </div>
            </div>
          </div>
          <div className='list-item'>
            <div className='list-images '>
              <a href={data[0].link}>
                <img className='list-image-home' src={image2} />
                <img className='list-image-main' src={image1} />
              </a>
            </div>
            <div className='list-description'>
              <div className='description-text'>
                <h2>Nightlife App</h2>
                <p>A full stack project that allows users to search for nightlife venues in a specific city and save up their plans.</p>
                <p>Techstack: React + Redux + SemanticUI React + Node.js + Express + MongoDB</p>
                <p>Website | Repo </p>
              </div>
            </div>
          </div>
          <div className='list-item'>
            <div className='list-images '>
              <a href={data[0].link}>
                <img className='list-image-home' src={image2} />
                <img className='list-image-main' src={image1} />
              </a>
            </div>
            <div className='list-description'>
              <div className='description-text'>
                <h2>Nightlife App</h2>
                <p>A full stack project that allows users to search for nightlife venues in a specific city and save up their plans.</p>
                <p>Techstack: React + Redux + SemanticUI React + Node.js + Express + MongoDB</p>
                <p>Website | Repo </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
