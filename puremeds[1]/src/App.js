import PureMeds from '../src/abis/PureMeds.json'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect } from 'react';
import { loadContract } from '../src/utils'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    logged : false
  }
  async componentDidMount() {
    await loadContract()
    this.setState({logged : window.myDet})
  }

  render() {
    
    return (
      <>
        <Navbar />
        <Router>

          <Routes>

            <Route path='/' element={window.myDet ? <Dashboard/> : <Signup/>} />

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

