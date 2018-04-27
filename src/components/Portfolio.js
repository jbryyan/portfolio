import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-container'>
        <header>Bryan Juarez</header>
        <p>Craft things that impress, engage, and epower</p>
        <ul className='cv-list'>
          <li><a>Download my CV</a></li>
          <li><Link to='/projects/fullstack'>View my projects</Link></li>
        </ul>
        <ul className='contact-list'>
          <li><a>Github</a></li>
          <li><a>LinkedIn</a></li>
          <li>Los Angeles, CA</li>
          <li>jbryyan@gmail.com</li>
        </ul>
        <footer className='footer'>
          <span>Bryan Juarez</span>
          <span> *Ribbon design adapted from Evan You's homepage*</span>
        </footer>
      </div>
    );
  }
}

export default Portfolio;
