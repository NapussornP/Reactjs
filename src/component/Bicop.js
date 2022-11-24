import React, { Component } from 'react';
import math from 'mathjs';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';

var ans='ans', Equation='num', X='x';

class Bisection extends Component{
    constructor(){
      super();
       console.log("Bisection");
    }
    componentDidMount(){
      console.log("Bisection");
    }
    getValue(){
      var equation = document.getElementById("equation").value;
      var x = document.getElementById("InputX").value;
      Equation=equation;
      X=x;
      ans=eval(equation);
      console.log(equation);
      console.log(x);
      console.log(ans);
      document.getElementById("showEquation").innerHTML=Equation;
      document.getElementById("showX").innerHTML=X;
      document.getElementById("showans").innerHTML=ans;
    }
    render(){
      console.log("render called")
      return(
        <div>
          <br></br>
          <h1 style={{textAlign: "center"}}>Bisection</h1>
          <br></br>
          <Form>
            <Form.Group className = "mb-3">
              <Form.Label>
                <h5 style={{textAlign: "center"}}>input number</h5>
              </Form.Label>
              <div>
                <Form.Control id = "equation" type='text' step="1" placeholder="equation" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                <Form.Control id = "InputX" type='number' step="1" placeholder="Input x" style={{width:"20%", margin:"0 auto"}}></Form.Control>
              </div>
              <Button onClick={this.getValue}>
                Submit
              </Button>
            </Form.Group>
          </Form>

          <div id="showEquation"></div>
          <div id="showX"></div>
          <div id='showans'></div>
        </div>
      )
    }
}

export default Bisection;


