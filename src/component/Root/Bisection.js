import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";


const Bisection =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
        setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="secondary">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XM</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xm}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Bisection Method',
                    fontSize:20
                    },
                legend:{
                display:true,
                position:'right'
                }
                }}
                />
                
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,err,scope;
        var iter = 0;
        var MAX = 100;
        const e = 0.00001;
        var obj={};
        do
        {
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

            iter ++;
            if (fXm*fXr > 0)
            {
                err = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                err = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xl = xm;
                // document.getElementById("err").innerHTML=err.toFixed(7);
            }
            document.getElementById("err").innerHTML=err.toFixed(7);
        }while(err>e && iter<MAX)
        setX(xm)

    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'Xl',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXl
          },
          {
            label: 'Xm',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: valueXm
          },
          {
            label: 'Xr',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXr
          }
        ]
    }
   
   
    //const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        //console.log(xlnum);
        //console.log(xrnum);
        Calbisection(xlnum,xrnum);
        //setData((Data)=>[...Data,data])
        //console.log(data);
        //console.log(Data);
       
        setHtml(print());
       
        //setState();
        console.log(valueIter)
        console.log(valueXl)
    }

    return (
            <Container>
                <Form >
                <br></br>
                    <h3>Bisection</h3>
                    <br></br>
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="primary" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5>Answer = {X.toPrecision(7)}</h5>
                <h5 style={{color:"dark"}}>Check error ≈ <h id="err"></h> </h5>
                <Container>
                {html}
                </Container>
               
            </Container>
           
    )
}

export default Bisection


// import React, { Component } from 'react';
// import math from 'mathjs';
// import Form from "react-bootstrap/Form";
// import { Button } from 'react-bootstrap';

// var ans='ans', Equation='num', X='x';
// var XR='xr', XL='xl';

// class Bisection extends Component{
//     constructor(){
//       super();
//        console.log("Bisection");
//     }
//     componentDidMount(){
//       console.log("Bisection");
//     }
    
//     //BisectionCal
//     getValue(){
//       var equation = document.getElementById("equation").value;
//       var XL = document.getElementById("InputXL").value;
//       var XR = document.getElementById("InputXR").value;
//       //var x = document.getElementById("InputX").value;
//       Equation=equation;
      
      
//       var xm, xr = XR, xl = XL;
//       var fxm, fxr, fxl;
//       var x;
//       var err;
//       var old=0, root;

//       //Bisection Cal
     

//       do
//       {
//         xm = (Number(xl) + Number(xr)) / 2.0;
//         x=xm;
//         fxm = eval(equation);
//         x=xr;
//         fxr = eval(equation);

//         if(Number(fxm) * Number(fxr) > 0)
//         {
//           xr = xm;
//         }
//         if(Number(fxm) * Number(fxr) < 0)
//         {
//           xl = xm;
//         }
        

//         root = xm
//         err = Math.abs((xm - old) / xm )* 100
//         old = xm
//         //root = xm
//         //console.log(root)
        
    
//     }while(err > 0.0000001 )

//     //check ans
//     x = xm;
//     var checkAns = eval(equation);
//     if(checkAns < 0.000001)
//     {
//       checkAns = 0;
//     }

//     document.getElementById("showEquation").innerHTML=Equation;
//     document.getElementById("Showroot").innerHTML=xm;
//     document.getElementById("Showroot2").innerHTML=xm;
//     document.getElementById("checkAns").innerHTML=checkAns;
      
      
      
//       // X=x;
//       // ans=eval(equation);
//       // console.log(equation);
//       // console.log(x);
//       // console.log(ans);
//       // document.getElementById("showEquation").innerHTML=Equation;
//       // document.getElementById("showX").innerHTML=X;
//       // document.getElementById("showans").innerHTML=ans;
//     }
//     render(){
//       console.log("render called")
//       return(
//         <div>
//           <br></br>
//           <h1 style={{textAlign: "center"}}>Bisection</h1>
//           <br></br>
//           <Form>
//             <Form.Group className = "mb-1">
//               <Form.Label>
//                 <h5 style={{textAlign: "center"}}>input number</h5>
//               </Form.Label>
//               <div>
//                 <Form.Control id = "equation" type='text'  placeholder="Equation" style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
//                 <Form.Control id = "InputXL" type='number'  placeholder="Input XL" style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
//                 <Form.Control id = "InputXR" type='number'  placeholder="Input XR" style={{width:"20%", margin:"0 auto"}}></Form.Control><br></br>
//               </div>
//               <Button onClick={this.getValue}>
//                 Calculate
//               </Button>
//             </Form.Group>
//           </Form>

//           {/* <div id="showEquation"></div>
//           <div id="showX"></div>
//           <div id='showans'></div> */}
//           <div>
//             <h>Answer: </h>
//             <h id="Showroot"></h>
//           </div>
//           <div>
//             <br></br>
//             <h>Check Answer:</h>
//             <br></br>
//             <h>Equation: </h>
//             <h id="showEquation"></h>
//             <br></br>
//             <h>when x is </h>
//             <h id='Showroot2'></h>
//             <br></br>
//             <h>Answer = </h>
//             <h id='checkAns'></h>
//           </div>
          
//         </div>
//       )
//     }
// }

// export default Bisection;


