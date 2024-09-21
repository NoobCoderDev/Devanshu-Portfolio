import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Images/portfolioLogo.png';

export default function Header() {
  return (
    <div className='container-fluid bg-light position-fixed z-99'>
        <div className='container d-flex justify-content-between align-items-center Navbar p-0'>
        <div className='leftHeader d-flex justify-content-cener align-items-center'>
            <div><img src={logo} alt="Logo" width={60} height={60}/></div>
            <div className='fw-bold'>
                <p>Devan<span className='Name'>shu</span></p>
                <p>Softwa<span className='Name'>re</span> <span className='job'>Developer</span> </p>
            </div>
        </div>
        <div className='rightHeader '>
            <ul className='d-flex justify-content-center align-items-center fw-normal'>
                <li><Link to={'/'} className='linkTag'>Home</Link></li>
                <li><Link to={'/About'} className='linkTag'>About</Link></li>
                <li><Link to={'/Experience'} className='linkTag service'>Experience</Link></li>
                <li><Link to={'/Projects'} className='linkTag'>Projects</Link></li>
                <li><Link to={'/Contact'} className='linkTag'>Contact</Link></li>
            </ul>
        </div>
        </div>
    </div>
  )
}
