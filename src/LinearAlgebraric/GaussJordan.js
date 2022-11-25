import React, { useState } from 'react'
import { Button, Container, Form, Table } from "react-bootstrap";

function GaussJordan() {

  const [size, setsize] = useState('')
  const [matrix, setmatrix] = useState('')

  const submit = e =>{
    e.preventDefault()
    genarate()
  }

  function genarate(){
    let array = []
      for(let i=0 ; i<size ; i++){
        array[i] = [] //render jsx arr
        let temp = [] 
        for(let j=0 ; j<=size ; j++){ 
          temp.push(
          <input
          id={"column"+i+"row"+j}
          />
          
          )  
        }
        array[i].push(<div class='matrix a'>{temp}</div>)
        
      }

      //setmatrix hook
      setmatrix({a:array})
  }


  const cal = e =>{
    e.preventDefault()

    let calmatrix = []

    //setmatrix a&b
    for(let i=0 ; i<size ; i++){
      calmatrix[i] = []
      for(let j=0 ; j<=size ; j++){
        
        calmatrix[i].push(Number(document.getElementById('column'+i+'row'+j).value)) 
      }
    }


   
    for(let i=0 ; i<=size ; i++){
      for(let j=i+1 ; j<size ; j++){
        let soltemp = calmatrix[j][i]/calmatrix[i][i]
        //console.log(soltemp)
        for(let k=0 ; k<=size ; k++){
          let tem = (soltemp*calmatrix[i][k])
          calmatrix[j][k] -= tem
        }
      }
    }
 

    let arrans = []
    arrans[size] = calmatrix[size-1][size]/calmatrix[size-1][size-1]
    //Backward Subsitution
    for(let i=size-1 ; i>=1 ; i--){
      arrans[i] = calmatrix[i-1][size]
      for(let j=i+1 ; j<=size ; j++){
        let tempind = calmatrix[i-1][j-1]*arrans[j]
        arrans[i] -= tempind
      }
      arrans[i] = arrans[i]/calmatrix[i-1][i-1]
    }
    console.log(calmatrix)
    

    //output on page
    let ans = []
    for(let i=1 ; i<arrans.length ; i++){
      ans.push(<div>x{i}={arrans[i].toFixed(6)}</div>)
    }
    setmatrix({a:matrix.a,b:ans})
  }

  return (
    <div className='gaussjordan'>
        <br></br>
        <h1>Gauss-Jordan</h1>
        <form>
        <Form.Group className="mb-3">
            <Form.Label>Input Matrix's size</Form.Label><br></br>
            <input name="size" type="size" value={size} onChange={event => setsize(event.target.value)} style={{width:"20%", margin:"0 auto"}}></input>
        </Form.Group>
        <Button variant="primary" onClick={submit}>
            Create
        </Button>
        
        </form><br/><br/>
        <div className='matrix f'>
            <div className='a'>      
            {
            matrix.a
            }
            </div>
        </div><br/><br/>
        <Button variant="primary" onClick={cal}>
                Calculate
        </Button>
        <div>
            {
            matrix.b
            }
        </div>
    </div>
  )
}

export default GaussJordan