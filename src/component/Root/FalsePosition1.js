import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";

const FalsePosition1=()=>{
    const print=()=>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXo(data.map((x)=>x.X1));
        //setValueXn(data.map((x)=>x.Xn));
        return(
            <Container>
                <Table striped bordered hover variant="Secondary">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            {/* <th width="30%">XOld</th> */}
                            <th width="30%">XNew</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X1}</td>
                                {/* <td>{element.Xn}</td> */}
                            </tr>)
                        })}
                    </tbody>
                </Table>

                
                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'FalsePosition Method',
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

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100

    const calFalsePosition=(xl,xr)=>{
        var fx1, fxr, fxl, scope;
        var x1, xl, xr, x,xn;
        var err;
        var xo = 0;
        var iter = 0;
        var MAX = 100;
        const e = 0.000001;
        var obj={};

        x=xl;
        fxl = eval(Equation)
        x=xr
        fxr=eval(Equation)
        do{
            x1 = ((xl * fxr) - (xr * fxl)) / (fxr - fxl);
            scope={
                x:x1,
            }
            fx1 = evaluate(Equation,scope)

            scope={
                x:xr,
            }
            fxr=evaluate(Equation,scope)
            if(fx1 * fxr > 0){
                xr = x1;
                xn = x1;
            }
            if(fx1 * fxr < 0){
                xl = x1;
                xn = x1;
            }
            
            iter++;
            err = error(xo,xn);
            obj={
                iteration:iter,
                X1:x1,
            }
            data.push(obj)
            xo = x1;
            console.log(err);
            document.getElementById("err").innerHTML=err.toFixed(7);
        }while(err>e && iter<MAX)

        document.getElementById("ans").innerHTML=x1.toFixed(7);
    }
        const data =[];
        const [valueIter, setValueIter] = useState([]);
        const [valueXo, setValueXo] = useState([]);
        const [valueXn, setValueXn] = useState([]);
        const state = {
        labels: valueIter,
        datasets: [
        //   {
        //     label: 'XOld',
        //     fill: false,
        //     lineTension: 0.5,
        //     backgroundColor: 'red',
        //     borderColor: 'red',
        //     borderWidth: 2,
        //     data: valueXo
        //   },
          {
            label: 'XNew',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXn
          }
        ]
    }
   
   
    //const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("43*x-1")
    const [X,setX] = useState(0)
    const [XR,setXR] = useState(0)


    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX = (event) =>{
        console.log(event.target.value)
        setX(event.target.value)
    }
    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(X)
        const xrnum = parseFloat(XR)
        calFalsePosition(xlnum,xrnum);
       
       
        setHtml(print());

        console.log(valueIter)
        console.log(valueXo)
    }
    
    return (
            <Container>
                <Form >
                <br></br>
                    <h3>False Position Iteration</h3>
                    <br></br>
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input X1</Form.Label>
                        <input type="number" id="X" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="primary" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5 style={{color:"dark"}}>Answer = <h id="ans"></h></h5>
                <h5 style={{color:"dark"}}>Check error ≈ <h id="err"></h> </h5>
                
                <br></br>
                <Container>
                {html}
                </Container>
               
            </Container>
           
    )

}

export default FalsePosition1