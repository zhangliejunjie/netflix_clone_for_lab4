import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div className='header'>
        <nav className='brand-tag'>
          <ul className='brand-ul'>
            <li className='nav-item'><div className='brand'></div></li>
            {/* <li className='nav-item'><a href='#home'></a><strong>Home</strong></li> */}
            <Link className='nav-item' to={'/'}>
              <a className='link_nav' href='/'>Home</a>
            </Link>
            <li className='nav-item'><a href='#tvshows'></a>TV Shows</li>
            <li className='nav-item'><a href='#movies'></a>Movies</li>
            <li className='nav-item'><a href='#news & Popular'></a>News & Popular</li>
            <Link className='nav-item' to={'/contact'}>
              <a className='link_nav' href='contact'>Contact</a>
            </Link>


            <li className='nav-item'><a href='#browsebylanguages'></a>Browse by Languages</li>
          </ul>
        </nav>
      </div>

    )
  }
}
