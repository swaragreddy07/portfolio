import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link, useNavigate}  from 'react-router-dom';
import Home from './Home.jsx'
import Smart from "./Smart.jsx"
import Blog from "./Blog.jsx"
import Pressbook from "./Pressbook.jsx"
import Canvas from "./Canvas.jsx"
import Sample from "./Sample.jsx"
function App() {
  return (
    <Router>
        <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/smart' Component={Smart}/>
        <Route exact path='/blog' Component={Blog}/>
        <Route exact path='/pressbook' Component={Pressbook}/>
        <Route exact path='/canvas' Component={Canvas}/>
        <Route exact path='/sample' Component={Sample}/>
        </Routes>
      
    </Router>
  )
}

export default App