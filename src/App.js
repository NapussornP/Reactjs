
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  Routes,
} from "react-router-dom";
  
import { Component } from 'react';


import Bisection from './component/Root/Bisection';
import OnePoint from './component/Root/OnePoint';
import NewtonRaphson1 from './component/Root/NewtonRaphson1';
import Secant1 from './component/Root/Secant1';
import Napussorn from './component/Root/Napussorn';
import FalsePosition1 from './component/Root/FalsePosition1';
import Cramer from './LinearAlgebraric/Cramer';
import GaussElimination from './LinearAlgebraric/GaussElimination';
import GaussJordan from './LinearAlgebraric/GaussJordan';


class App extends Component{
  nextPath(path){
    this.props.history.push(path);
  }
  
    render(){
      return (
        <div className='App'>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element = {<Bisection/>}/>
            <Route path="/Bisection" element = {<Bisection/>}/>
            <Route path='/False-Position' element ={<FalsePosition1/>}/>
            <Route path='/OnePointIteration' element ={<OnePoint/>}/>
            <Route path='/NewtonRaphso' element={<NewtonRaphson1/>}/>
            <Route path ='/Secant' element= {<Secant1/>}/>
            <Route path='/Napussorn' element={<Napussorn/>}/>
            <Route path='/CramerRule' element={<Cramer/>}/>
            <Route path='/GuassElimination' element = {<GaussElimination/>}/>
            <Route path='/Guass-Jordan' element ={<GaussJordan/>}/>
           
          </Routes>
          </BrowserRouter>
        </div>
      );
    }
}
export default App;
