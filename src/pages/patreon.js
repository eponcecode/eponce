import React from "react";
import Footer from "./Footer";
import Header from "./header";

export default function Patreon(){
    return(
        <>
        <Header/>
        <table className='poesiaContainer'>
        <tbody>
        <tr>
          <td>
            Redirigiendo...
            {window.location.replace('https://www.patreon.com/eponce')}
            </td>
            </tr>
            </tbody>
        </table>
        <Footer/>
        </>
    )
}