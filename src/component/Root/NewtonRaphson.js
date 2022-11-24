import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'

import { Line } from "react-chartjs-2";
import { Component } from "react";
const math = require('mathjs')

class NewtonRaphson extends Component{
    constructor(){
        super();
         console.log("NewtonRaphson");
      }
      componentDidMount(){
        console.log("NewtonRaphson");
      }
      
      
      getValue(){
        var equation = document.getElementById("equation").value;
        var x0 = document.getElementById("InputX").value;
        
        var x;
        var fx, diff;
        var xold, xnew;
        var err;
        xold = x0;
        do{

            x = xold;
            fx = eval(equation);
            diff = math.derivative((equation));
            x=xold;
            diff = eval(diff)
            xnew = xold - (fx / diff);
            err = Math.abs((xnew - xold) / xnew)* 100;
            xold = xnew;


        }while(err>0.000001)

        x=xnew
        var checkAns = eval(equation);
        if(checkAns < 0.000001)
        {
            checkAns=0;
        }

        document.getElementById("root").innerHTML=xnew;
        document.getElementById("root2").innerHTML=xnew
        document.getElementById("showEquation").innerHTML=equation;
        document.getElementById("checkAns").innerHTML=checkAns;

      }

      render(){
        return(
            <div>
                <br></br>
                <h1>Newton Raphson</h1>
                <br></br>
                <Form>
                    <Form.Group classname = "mb-1">
                        <Form.Label>
                            <h5>input number</h5>
                        </Form.Label>
                        <div>
                            <Form.Control id = "equation" type='text' placeholder="Equation" style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
                            <Form.Control id = "InputX" type='number'  placeholder="Input X0" style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
                        </div>
                        <Button onClick={this.getValue}>
                            Calculate
                        </Button>
                    </Form.Group>
                </Form>
                <div>
                    <br></br>
                    <h>Answer:</h>
                    <h id = "root"></h>
                </div>
                <div>
                    <br></br>
                    <h>Check Answer:</h>
                    <br></br>
                    <h>Equation: </h>
                    <h id="showEquation"></h>
                    <br></br>
                    <h>when x is </h>
                    <h id='root2'></h>
                    <br></br>
                    <h>Answer = </h>
                    <h id='checkAns'></h>
                </div>
            </div>
        )
      }


}

export default NewtonRaphson;