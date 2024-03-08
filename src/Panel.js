import React from 'react';

import me from './assets/me.PNG'

import './Panel.css'

function Panel({title, text}){

    return (        
        <div className='panel' id="chi sono">
            <div className='title'>
                {/*<img src={me} className='photo'></img>*/}
                <h2 style={{textAlign: 'center'}}>{title}</h2>
            </div>
            <div className='text'>
                {text}
            </div>
        </div>
        
    )
}

export default Panel;