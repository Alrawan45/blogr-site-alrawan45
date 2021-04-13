 import React,{useState} from 'react'
import './Nav.css'
import ToggleOPen from '../../assets/Toggle-open.svg'

const Nav=()=>{
   const[show,setShow]=useState(false)
    return(
        <header id="logo">
            <nav className='Nav'>
                <div  className='Navbrand'>
                <span><a href='#!'>Blogr</a></span>
                </div>
                <div className='NavList' id={show ? 'hidden': ''}>
                <ul >
                <li><a href='#!'>Product</a></li>
                <li><a href='#!'>Company</a></li>
                <li><a href='#!'>Connect</a></li>
                </ul>
                </div>
                <button className='ToggleBtn' onClick={()=>setShow(!show)}>
                   <img src={ToggleOPen} alt='btnbtn'/>
                </button>
            </nav>
           <div className='Navcontent'>
                <h1>A modern publishing platfrom</h1>
                <p>Grow your audience and build your online brand</p>
                <div>
                    <button>start for free</button>
                    <button>learn more</button>
                </div>
            </div> 
        {/* <div className={classes.Nav}>
            <div className={classes.NavRight}>
                <div  className={classes.Navbrand}>
                <span><a href='#!'>Blogr</a></span>
                </div>
            <nav className={classes.Navlist}>
            <ul className={classes.NavFirst}>
                <li><a href='#!'>Product</a></li>
                <li><a href='#!'>Company</a></li>
                <li><a href='#!'>Connect</a></li>
            </ul>
            <ul className={classes.NavSecond}>
                <li><a href="#!">Log in</a></li>
                <li className={classes.NavSignup}><a href="#!">Sign Up</a></li>
            </ul>
           </nav>
            </div>
            <div className={classes.NavToggle}>
                <a  href="#!"
                    onClick={ToggleHandler}>
                    <img src={ToggleOPen} alt='Toggle-img'/>
                </a>
            </div>
            </div>
            <div className={classes.Navcontent}>
                <h1>A modern publishing platfrom</h1>
                <p>Grow your audience and build your online brand</p>
                <div>
                    <button>start for free</button>
                    <button>learn more</button>
                </div>
            </div> */}
        </header>
    )
}
export default Nav;