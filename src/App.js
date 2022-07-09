import React from 'react'
import { addPrefetchExcludes } from 'react-static'

import { FiFacebook,FiInstagram,FiTwitter } from 'react-icons/fi'
import {RiPatreonLine} from 'react-icons/ri'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <>
      <div>
        <h1>eponce</h1>
        <h2><b>Poesía</b></h2>
        <div className='SocialMedia'>
          <a href='https://www.facebook.com/eponce.blog' target="_blank" rel="noreferrer"><FiFacebook /></a>
          <a href='https://www.twitter.com/eponce_blog' target="_blank" rel="noreferrer"> <FiTwitter /></a>
          <a href='https://www.instagram.com/eponce.blog' target="_blank" rel="noreferrer"><FiInstagram /></a>
          <a href='https://www.patreon.com/eponce' target="_blank" rel="noreferrer"><RiPatreonLine /></a>
        </div>
      </div>
      <div>
        <table className="content">
          <tr>
            <td><a href='https://www.patreon.com/eponce' target="_blank" rel="noreferrer">Comunidad Patreon</a></td>
          </tr>
          <tr>
            <td><a href='https://www.amazon.com.mx/eponce-blog/e/B091SFNDVY' target="_blank" rel="noreferrer">Tienda Amazon</a></td>
          </tr>
          <tr>
            <td><a href='mailto: eponce.blog@gmail.com' target="_blank" rel="noreferrer">Contacto</a></td>
          </tr>
        </table>
        <div>
          <table className="footer">
            <tr>
              <td>© eponce</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
