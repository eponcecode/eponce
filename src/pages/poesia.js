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
    <p>Érase una vez una chica que amaba plasmar sus pensamientos en un diario, un diario lejano que poco a poco se convirtió en su hogar...</p>
    <p>Un hogar de ultratumba llena de fantasía y reflexión</p>
    <p>¿Ese mundo era cierto o sólo parte de su mente?</p>
    <p>Sería curioso saberlo...</p>
          </td>
        </tr>
      </tbody>
    </table>
    <Footer/>
   </>
  )
  }