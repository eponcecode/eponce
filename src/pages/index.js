import React from 'react'
import { FiFacebook,FiInstagram,FiTwitter } from 'react-icons/fi'
import {RiPatreonLine} from 'react-icons/ri'

export default function Home(){
  return(
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
        <table className="content">
          <tbody>
          <tr>
            <td colSpan="2"><a href='https://www.patreon.com/eponce'>Comunidad Patreon</a></td>
          </tr>
          <tr>
            <td><img src='img/un_angel_en_la_tierra_frente.png' align="left"/></td>
            <td className='anuncio'><a href='https://www.amazon.com/dp/B0B6M5R9MR'>
               Un ángel en la Tierra (Un viaje intrapersonal) [Preventa]</a></td>
          </tr>
          <tr>
            <td><img src='img/paraminicaestrella.png' align="left"/></td>
            <td align="center"><a href='https://leer.amazon.com.mx/kp/embed?asin=B09DB2GNDC&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_QJVP3FQA7D7F2HGNSQM2'>
               Para mi única estrella (Poemario)</a></td>
          </tr>
          <tr>
            <td><img src='img/ultimaoportunidad.png' align="left"/></td>
            <td><a href='https://leer.amazon.com.mx/kp/embed?asin=B08YSGZ5KB&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_ARB7FZWHRZKXFR3HX16Q'>
              Última Oportunidad (Poemario)</a></td>
          </tr>
          <tr>
            <td colSpan="2"><a href='https://www.amazon.com.mx/eponce-blog/e/B091SFNDVY'>Tienda Amazon</a></td>
          </tr>
          <tr>
            <td colSpan="2"><a href='mailto: eponce.blog@gmail.com'>Contacto</a></td>
          </tr>
          </tbody>
        </table>
          <table className="footer">
            <tbody>
            <tr>
              <td>© eponce</td>
            </tr>
            </tbody>
          </table>

    </>)
  }