import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";



const Napussorn=()=>{



    const [Equation,setEquation] = useState();
    const [x,setX] = useState();

    const inputX=(event)=>{
        console.log(event.target.value);
        setX(event.target.value);
    }
    const inputEqation=(event)=>{
        console.log(event.target.value);
        setEquation(event.target.value);
    }

    return(
        <Container>
            <Form>
                <br></br>
                <h3>Napussorn</h3>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label>Input X</Form.Label>
                    <input type="Number" id="Inputx" onChange={inputX} style={{width:"20%", margin:"0 auto"}} placeholder='Input X' className="form-control"></input>
                    <Form.Label>Equation</Form.Label>
                    <input type="text" id="equation" onChange={inputEqation} style={{width:"20%", margin:"0 auto"}} placeholder='Equation' className="form-control"></input>
                </Form.Group>
                <Button variant="dark">
                    Done
                </Button>
            </Form>
        </Container>
    )
}

export default Napussorn;