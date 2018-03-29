import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './classComponent';


ReactDom.render(
    <div className="container">
        <ClassComponent value="Say hello to my little friend!!!"/>
    </div>
    , document.getElementById('app'));