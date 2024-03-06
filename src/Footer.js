import { useState } from 'react'

import gitHubLogo from './assets/github-mark.svg'
import instagramLogo from './assets/Instagram_Glyph_Black.svg'
import gitHubLogoWhite from './assets/github-mark-white.svg'
import instagramLogoWhite from './assets/Instagram_Glyph_White.svg'

import './Footer.css'

function Footer(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return (        
            <div className='footer'>
                <a href='https://github.com/corsone' target='_blank'><img src={gitHubLogoWhite} className='logoFooter'/></a>
                <a href='https://www.instagram.com/riccardo___corsini/' target='_blank'><img src={instagramLogoWhite} style={{width: '2.8em'}} className='logoFooter'/></a>
            </div>
        )
    }

    return (        
        <div className='footer'>
            <a href='https://github.com/corsone' target='_blank'><img src={gitHubLogo} className='logoFooter'/></a>
            <a href='https://www.instagram.com/riccardo___corsini/' target='_blank'><img src={instagramLogo} style={{width: '2.8em'}} className='logoFooter'/></a>
        </div>
    )
}

export default Footer;