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
          { Object.keys(projects).map(key => {
              return(<div className='list-item' key={key}>
                <div className='list-images '>
                  <a href={projects[key].link}>
                    <img className='list-image-home' src={projects[key].image} />
                    <img className='list-image-main' src={projects[key].image1} />
                  </a>
                </div>
                <div className='list-description'>
                  <div className='description-text'>
                    <h2>{projects[key].name}</h2>
                    <p>{projects[key].description}</p>
                    <p>Techstack: {projects[key].techstack.join(', ')}</p>
                    <p><a href={projects[key].link}>Website</a> | <a href={projects[key].repo}>Repo</a> </p>
                  </div>
                </div>
              </div>
              )})
          }
        </div>
      </div>
    );
  }
}

export default Projects;
