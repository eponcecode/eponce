import React from "react"
import { FiFacebook,FiInstagram,FiTwitter } from 'react-icons/fi'
import {RiPatreonLine} from 'react-icons/ri'
import {Link} from '../components/Router'
export default function HeaderHidded(){
    return(
        <div>
        <Link to="/"><h1 className="eponce">eponce</h1></Link>
        <Link to="/poesia"><h2 className='poesia'><b>Poesía</b></h2></Link>
        <div className='SocialMedia'>
          <a href='https://www.facebook.com/eponce.blog' target="_blank" rel="noreferrer"><FiFacebook /></a>
          <a href='https://www.twitter.com/eponce_blog' target="_blank" rel="noreferrer"> <FiTwitter /></a>
          <a href='https://www.instagram.com/eponce.blog' target="_blank" rel="noreferrer"><FiInstagram /></a>
          <a href='https://www.patreon.com/eponce' target="_blank" rel="noreferrer"><RiPatreonLine /></a>
        </div>
      </div> 
    )
}