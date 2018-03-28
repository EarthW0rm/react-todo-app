import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {Primeiro, Segundo} from './component';


ReactDom.render(
    <div>
        <Primeiro/>
        <Segundo/>
    </div>
    , document.getElementById('app'));