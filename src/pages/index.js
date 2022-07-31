import React from 'react'
import Footer from './Footer'

import Header from './header'
export default function Home(){
  return(
    <>
    <Header/>
        <table className="content">
          <tbody>
          <tr>
            <td colSpan="2"><a href='https://www.patreon.com/eponce'>Comunidad Patreon</a></td>
          </tr>
          <tr>
            <td><img src='img/un_angel_en_la_tierra_frente.png' align="left"/></td>
            <td className='anuncio'><a href='https://www.amazon.com/dp/B0B6M5R9MR'>
               Un ángel en la Tierra - Un viaje intrapersonal (Poemario) [Preventa]</a></td>
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
            <td colSpan="2"><a href='mailto: eponce.poesia@gmail.com'>Contacto</a></td>
          </tr>
          </tbody>
        </table>
        <Footer/>
    </>)
  }