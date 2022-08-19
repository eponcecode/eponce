import React from 'react'
import Footer from './Footer'
import { Link } from '../components/Router'
import Header from './header'
export default function Home() {
  return (
    <>
      <Header />
      <table className="content">
        <tbody>
          <tr>
            <td colSpan="2">
                <h3>Acerca de</h3>
            <small>
              Algunos textos fuera de contexto...<br />
              Algunos sentimientos y otros más pensamientos<br />
              ¿Quién diría que la vida nos llevaría tan lejos...?<br />
              ¿Quién diría que sería esta vida la que yo viviría?<br />
              -eponce<br />
            </small>
              <div>
                Escribo por amor a la poesía, siempre tuve universos alternos en mi mente desde que era pequeña y en cuanto aprendí sobre este arte me entuciasmé mucho por plasmar cada uno de ellos en esto...
                <br />
                A lo largo del tiempo ha ido creciendo y tomando forma en un unico universo lleno de miles más...
                <br /><br />
                Me encantaría que tu formaras parte de él úniendote a la lectura de alguno de mis poemarios en sus diversos formatos [ebook kindle | tapa blanda] que van detallando este universo paso a paso...
                o mejor aún, mantente en contacto conmigo y se parte del desarrollo a través de nuestra comunidad en Patreon, para esto y más estan los enlaces aquí debajo.
                <br />
              </div>
              Bienvenido.<br /><br />
              eponce<br/><br/>
            </td>
          </tr>
          <tr>
            <td colSpan="2"><Link to="/patreon">Comunidad Patreon</Link></td>
          </tr>
          <tr>
            <td colSpan="2">
              Poemarios [En línea]
            </td>
          </tr>
          <tr>
            <td><img src='img/un_angel_en_la_tierra_frente.png' align="left" /></td>
            <td className='anuncio'><a href='https://a.co/2ao1w5B'>
              Un ángel en la Tierra - Un viaje intrapersonal</a></td>
          </tr>
          <tr className='noborder'>
            <td><img src='img/paraminicaestrella.png' align="left" /></td>
            <td align="center"><a href='https://a.co/7CEANBL'>
              Para mi única estrella</a></td>
          </tr>
          <tr>
            <td><img src='img/ultimaoportunidad.png' align="left" /></td>
            <td><a href='https://a.co/dZou5kJ'>
              Última Oportunidad</a></td>
          </tr>
          <tr>
            <td colSpan="2"><a href='https://www.amazon.com/s?i=digital-text&rh=p_27%3AEstefan%C3%ADa+Ponce+de+Le%C3%B3n&s=relevancerank&language=es&text=Estefan%C3%ADa+Ponce+de+Le%C3%B3n&ref=dp_byline_sr_ebooks_1'>Tienda Amazon</a></td>
          </tr>
          <tr>
            <td colSpan="2"><a href='mailto: eponce.poesia@gmail.com'>Contacto (Negocios o Aclaraciones)</a></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>)
}