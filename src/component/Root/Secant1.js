import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";

const Secant1=()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="secondary">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">Xnew</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td> 
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Seccant Method',
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

        
    

    

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*10
    const calSecant=(xl, xr)=>{
        var fx0,fx1,scope,xn, xold, xnew,err;
        var xo,xn,err,scope;
        var iter = 0;
        var MAX = 100;
        var e=0.000001;
        var obj={}
        
        

        
        do{
            scope={
                x:xl,
            }
            fx0 = evaluate(Equation,scope)


            scope={
                x:xr,
            }
            fx1=evaluate(Equation,scope)

            iter++;

            xn = xr - (fx1 * (xl - xr) / (fx0 - fx1));

            err = error(xl,xr)
            obj={
                iteration:iter,
                Xl:xl,
                Xr:xr,
                Xn:xn,

            }
            data.push(obj)
            xl=xr;
            xr=xn;
            
            
            document.getElementById("err").innerHTML=err.toFixed(7);
        }while(err>e && iter<MAX)
        document.getElementById("ans").innerHTML=xn.toFixed(7);
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
            label: 'XNew',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXr
          }
        ]
    }
    //const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^2)-7")
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
        calSecant(xlnum,xrnum);
        //setData((Data)=>[...Data,data])
       
        setHtml(print());

        console.log(valueIter)
        console.log(valueXl)
    }

    return(
        <Container>
            <Form >
                <br></br>
                    <h3>Secant Method</h3>
                    <br></br>
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input X0</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input X1</Form.Label>
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
export default Secant1