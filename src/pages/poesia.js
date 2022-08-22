import React from 'react'
import Footer from './Footer'
import HeaderHidded from './headerhidded'

export default function Poesia() {
  return(
   <>
   <HeaderHidded/>
    <table className='poesiaContainer'>
      <tbody>
        <tr>
          <td>
    <p>Secretos...</p>
    <p>estamos cubiertos de ellos y vamos en busca de un poco más...</p>
    <p>Un poco más que pide nuestra alma, sólo para hacernos sentir mejor</p>
    <p>Más especiales, más reales, más simplemente nosotros mismos.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <Footer/>
   </>
  )
  }