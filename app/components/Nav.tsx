import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    // <div className='navbar-wrapper'>
      <div className="navbar">
        <div className="navbar__top">
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <p style={{ fontSize: '25px', margin: '0', marginTop: '20px'}}>Perplexity</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <button className='new-thread-button'>New Thread</button>
          </div>
          <div>
            <Link href="/" className='nav-link'>
              <p className='nav-links-top'>Home</p>
            </Link>
            <Link href="/" className='nav-link'>
              <p className='nav-links-top'>Discover</p>
            </Link>
            <Link href="/" className='nav-link'>
              <p className='nav-links-top'>Library</p>
            </Link>
          </div>
        </div>
        <div className="navbar__bottom">
          <div  className='try-pro-navbar'>
            <Link href="/" className='nav-link'>
              <p className='try-pro-label'>Try Pro</p>
            </Link>
            <p style={{ color: '#555555', fontSize: '12px'}}>Upgrade for image upload, smarter AI, and more Pro Search.</p>
            <div style={{ display: 'flex', alignContent: 'center'}}>
              <Link href="/" className='nav-link'>
                <p className='learn-more-label'>Learn more</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='account-navbar'>
          <hr/>
          <Link href="/" className='nav-link'>
            <p className='download-navbar'>👾 jabbarlee</p>
          </Link>
          <hr/>
          <Link href="/" className='nav-link'>
            <p className='download-navbar'>Download</p>
          </Link>
        </div>
      </div>
    // </div>
  )
}

export default Nav