import React from 'react';

import me from './assets/me.PNG'

import './Panel.css'

function Panel({title, text}){

    return (        
        <div>
            <div className='panel'>
                {/*<img src={me} className='photo'></img>*/}
                <div className='text'>
                    <h2>{title}</h2>
                    {text}
                </div>
            </div>
        </div>
        
    )
}

export default Panel;