import React from 'react'
import {Link} from '../components/Router'
export default function DontFound (){
 return(
  <table className="footer">
  <tbody>
  <tr>
    <td>    <div className='center'>
    <h3>Oh no! What are you here? </h3>
    <span>Come <Link to="/">here</Link> to go to the front page!</span>
  </div></td>
  </tr>
  </tbody>
</table>

 )
}