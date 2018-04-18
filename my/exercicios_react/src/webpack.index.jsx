import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './classComponent';
import Field from './field';

ReactDom.render(
    <div className="container">
        <Field label='Contator' initialValue={10} />
    </div>
    , document.getElementById('app'));