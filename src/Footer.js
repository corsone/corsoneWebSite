import React from 'react';

import gitHubLogo from './assets/github-mark.svg'
import instagramLogo from './assets/Instagram_Glyph_Black.svg'

import './Footer.css'

function Footer(){
    return (        
        <div className='footer'>
            <a href='https://github.com/corsone' target='_blank' rel="noopener noreferrer"><img src={gitHubLogo} className='logoFooter' alt="github"/></a>
            <a href='https://www.instagram.com/riccardo___corsini/' target='_blank' rel="noopener noreferrer"><img src={instagramLogo} style={{width: '2.3em'}} className='logoFooter' alt="instagram"/></a>
            <a href='mailto:riccardo.corsini02@gmail.com'><p>riccardo.corsini02@gmail.com</p></a>
        </div>
    )
}

export default Footer;