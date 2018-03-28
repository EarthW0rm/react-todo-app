import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Griffins from './familyGuy';


ReactDom.render(
    <div class="container">
        <Griffins />
    </div>
    , document.getElementById('app'));