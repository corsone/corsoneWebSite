import React from 'react';
import Panel from './Panel'
import Projects from './Projects';
import Intro from './Intro';

import './Body.css'

function Body(){
    return (
        <div className='body'>
            <Intro></Intro>
            <Panel></Panel>
            <Projects></Projects>
        </div>
    )
}

export default Body;