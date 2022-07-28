import React from 'react'
import {Link} from '../components/Router'
export default function DontFound (){
 return(
  <table className="footer">
  <tbody>
  <tr>
    <td>    <div className='center'>
    <h3>Oh no! ¿Cómo llegaste aquí? </h3>
    <span>Haz clic <Link to="/">aquí</Link> para regresar a la página principal!</span>
  </div></td>
  </tr>
  </tbody>
</table>

 )
}