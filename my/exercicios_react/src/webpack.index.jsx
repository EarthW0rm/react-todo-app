import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Family from './family';
import Member from './member';
//import Griffins from './familyGuy';


ReactDom.render(
    <div className="container">
        <Family lastName="Quagmire" >
            <Member name="Glenn"/>
        </Family>
    </div>
    , document.getElementById('app'));