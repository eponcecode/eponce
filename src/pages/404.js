import React from 'react'
import {Link} from '../components/Router'
export default function DontFound (){
 return(
  <table className="dontFound">
  <tbody>
  <tr>
    <td>    <div className='center'>
    <h3>¡Oh no! <br/>¿Cómo llegaste aquí? </h3>
    <span>¡Haz clic <Link to="/">en este enlace</Link> para regresar a la página principal y retornar a la lectura!</span>
  </div></td>
  </tr>
  </tbody>
</table>

 )
}