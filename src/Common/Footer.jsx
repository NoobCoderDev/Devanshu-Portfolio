import React from 'react'
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faHeart} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <>
      <div className='container-fluid text-center footer bg-light d-flex align-items-center justify-content-center flex-column'>
      <hr />
            <div className='OtherIcons d-flex flex-column justify-content-center'>
                <ul className='d-flex justify-content-center align-items-center gap-5'>
                    <li><a href='https://www.linkedin.com/in/devanshu-sonbhurra/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>

                    <li><a href='https://github.com/NoobCoderDev' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className='text-black'/></a></li>

                    <li><a href='https://www.instagram.com/noobcoderdev/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-pink'/></a></li>

                    <li ><a href='https://www.facebook.com/devanshu.sonbhurra' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                </ul>
            </div>
            
            <div className='smallLine container'></div>

            <div className=''>
               <p><FontAwesomeIcon icon={faCopyright}/> 2024 Devanshu's Company.&nbsp; All right reserved. &nbsp; Supportive Partner <FontAwesomeIcon icon={faHeart}/> Lalit Doriya</p>
            </div>
        <hr />
      </div>
    </>
  )
}
