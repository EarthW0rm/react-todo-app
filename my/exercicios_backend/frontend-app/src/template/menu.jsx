import React from 'react'

export default props => (
    <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
                <i className="fa fa-calendar-check-o"></i>
                TODO App
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapsed">
            <ul className="nav navbar-nav">
              <li><a href="#/todos">Tarefas</a></li>
              <li><a href="#/about">Sobre</a></li>
            </ul>
          </div>
        </div>
      </nav>
)