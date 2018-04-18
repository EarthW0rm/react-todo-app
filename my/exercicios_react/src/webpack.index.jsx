import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './classComponent';


ReactDom.render(
    <div className="container">
        <ClassComponent label='Contator' initialValue={10} />
    </div>
    , document.getElementById('app'));