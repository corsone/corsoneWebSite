import React, { useState } from 'react'

import me from './assets/me2.jpg'
import './Header.css'

function Header(){
    const [id, SetId] = useState("logoHeader");
  
    function handleClickMagia(){
        (id === "logo-magia")? SetId("logoHeader") : SetId("logo-magia");
    }

    return (
        <div className='header'>
            <div className='nav'>
                <img src={me} className={id} onClick={handleClickMagia} alt="logo"/>
            </div>
        </div>
    )
}

export default Header;