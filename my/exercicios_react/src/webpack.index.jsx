import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Family from './family';
import Member from './member';
//import Griffins from './familyGuy';


ReactDom.render(
    <div className="container">
        <Family lastName="Griffin">
            <Member name="Peter"/>
            {/* <Member name="Lois"/>
            <Member name="Stewie"/>
            <Member name="Brian"/>
            <Member name="Meg"/> */}
        </Family>
    </div>
    , document.getElementById('app'));