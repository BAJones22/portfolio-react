import React from 'react'

function Navbar({setDisplayState}) {
  return (
    <div>
         <nav>
            <img src="assets/images/logo.jpg" class="logo"></img>
            <ul>
                <li><button onClick={ () => setDisplayState('')}>Home</button></li>
                <li><button onClick={ () => setDisplayState('about')}>About</button></li>
                <li><button onClick={ () => setDisplayState('portfolio')}>Portfolio</button></li>
                <li><button onClick={ () => setDisplayState('resume')}>Resume</button></li>
                <li><button onClick={ () => setDisplayState('contact')}>Contact</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
