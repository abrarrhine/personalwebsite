import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='home'>
        <nav className='mgbot'>
            <input id='nav-toggle' type='checkbox'></input>
            <div className='logo'>W E L C O M E </div>
            <ul className='links'>
                <li> <Link to="/" >Home</Link></li>
                <li> <Link to="/experience" >Experience</Link></li>
                <li> <Link to="/projects" >Projects</Link></li>
                <li> <Link to="/artworks" >Artworks</Link></li>
                <li> <Link to="/photos" >Photos</Link></li>
            </ul>
            <label for="nav-toggle" className='icon-burger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </label>
        </nav>

    </div>
  )
}

export default Header