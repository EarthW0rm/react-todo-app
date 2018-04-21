import React from 'react'
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Todo from './todo/todo'
import About from './about/about'

export default props => (
    <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Route component={Todo} />
    </Switch>
)