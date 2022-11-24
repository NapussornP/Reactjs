
import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";


const Onepoint =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXo(data.map((x)=>x.Xo));
        setValueXn(data.map((x)=>x.Xn));
        return(
            <Container>
                <Table striped bordered hover variant="Secondary">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XOld</th>
                            <th width="30%">XNew</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xo}</td>
                                <td>{element.Xn}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>

                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Onepoint Iteration',
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

    const CalOnepoint = (xo) => {
        var xo,xn,err,scope;
        var iter = 0;
        var MAX = 100;
        const e = 0.000001;
        var obj={};
        do
        {

            scope = {
                x:xo,
            }
            xn = evaluate(Equation, scope)

            iter ++;
            err = error(xo, xn);
            obj = {
                iteration:iter,
                Xo:xo,
                Xn:xn
                
            }
            data.push(obj)
            xo = xn;
            console.log(xn)
            console.log(err);
            document.getElementById("err").innerHTML=err.toFixed(7);
        }while(err>e && iter<MAX)
        document.getElementById("ans").innerHTML=xn.toFixed(7);
    }


    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXo, setValueXo] = useState([]);
    const [valueXn, setValueXn] = useState([]);
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'XOld',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXo
          },
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
   
   
    const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("2*x-1")
    const [X,setX] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX = (event) =>{
        console.log(event.target.value)
        setX(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(X)
        CalOnepoint(xlnum);
        setData((Data)=>[...Data,data])
       
        setHtml(print());

        console.log(valueIter)
        console.log(valueXo)
    }
    
    return (
            <Container>
                <Form >
                <br></br>
                    <h3>One-point Iteration</h3>
                    <br></br>
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input X</Form.Label>
                        <input type="number" id="X" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
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

export default Onepoint