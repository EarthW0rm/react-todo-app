import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../sass/main'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'



export default props => (
    <div className='container'>
        <Menu />
        <div className="container">
            <Routes/>
        </div>
    </div>
)