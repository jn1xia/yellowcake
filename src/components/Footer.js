import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://https://www.instagram.com/gadjahmadamuda/?hl=en/">@gadjahmadamuda</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.instagram.com/gadjahmadamuda/?hl=en">Gajdah Mada Muda</a>.
        </span>
      </div>
    </footer>
  </div>
)
