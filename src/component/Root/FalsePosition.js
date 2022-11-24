import React, { Component } from 'react';
import math from 'mathjs';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';

var Equation='num'
class FalsePosition extends Component
{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log("FalsePosition");
    }

    getValue(){
        var equation = document.getElementById("equation").value;
        var XL = document.getElementById("InputXL").value;
        var XR = document.getElementById("InputXR").value;

        Equation=equation;
        //FalsePo met
        var fx1, fxr, fxl;
        var x1, xl=XL, xr=XR;
        var err;
        var old = 0;
        var x;

        
        

        x=xl;
        fxl=eval(equation);
        x=xr;
        fxr=eval(equation);

        do{
            x1 = ((xl * Number(fxr)) - (xr * Number(fxl))) / (Number(fxr) - Number(fxl));
            x=x1;
            fx1=eval(equation);
            x=xr;
            fxr=eval(equation);

            if(Number(fx1) * Number(fxr) > 0){
                xr=x1;
            }
            if(Number(fx1) * Number(fxr) < 0){
                xl=x1;
            }
            
            err=Math.abs((x1 - old) / x1) * 100;
            old = x1;
        }while(err > 0.000001)

        document.getElementById("Showroot").innerHTML=x1;
        document.getElementById("showEquation").innerHTML=equation;
        document.getElementById("showroot2").innerHTML=x1;

        x=x1;
        var checkAns = eval(equation);
        if(checkAns < 0.000001){
            checkAns = 0;
        }
        document.getElementById("checkAns").innerHTML=checkAns;

    }

    render(){
        console.log("render called")
        return(
            <div>
                <br></br>
                <h1>False-Position</h1><br></br>
                <Form>
                    <Form.Group className='mb-2'>
                        <Form.Label>
                            <h5 style={{textAlign: "center"}}>input number</h5>
                        </Form.Label>
                        <div>
                            <Form.Control id='equation' type='text' placeholder='Equation' style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
                            <Form.Control id='InputXL' type='number' placeholder='Input XL' style={{width: "20%", margin:"0 auto"}}></Form.Control><br></br>
                            <Form.Control id='InputXR' type='number' placeholder='Input XR' style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
                        </div>
                        <Button onClick={this.getValue}>
                            Calculate
                        </Button>
                    </Form.Group>
                </Form>
                <div>
                    <h>Answer: </h>
                    <h id="Showroot"></h>
                </div>
                <div>
                    <br></br>
                    <h>Check Answer</h>
                    <br></br>
                    <h>Equation: </h>
                    <h id='showEquation'></h>
                    <br></br>
                    <h>when x is </h>
                    <h id='showroot2'></h>
                    <br></br>
                    <h>Answer = </h>
                    <h id='checkAns'></h>

                </div>
            </div>
        )
    }

}
export default FalsePosition;