import React,{ useState } from 'react'
import { create, all } from 'mathjs'
import { Button, Container, Form, Table } from "react-bootstrap";

function GaussElimination() {
  const [size, setsize] = useState('')
  const [matrix, setmatrix] = useState('')
  const config = { }
  const math = create(all, config)

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
    let tmpa = []
    let tempb = []
    let calstep = []

    for(let i=0 ; i<size ; i++){
      calmatrix[i] = []
      tmpa[i] = []
      calstep[i] = []
      //setmatrixb
      tempb.push((Number(document.getElementById('column'+i+'row'+size).value)))
      //setmatrixa
      for(let k=0 ; k<size ; k++){
        tmpa[i].push(Number(document.getElementById('column'+i+'row'+k).value))
      }
      //setmatrix a|b
      for(let j=0 ; j<=size ; j++){
        
          calmatrix[i].push(Number(document.getElementById('column'+i+'row'+j).value))
      }
    }
    
    let roundtri = 1
    let matrixA = calmatrix.map(a=>a.slice()) 
    let tempa = calmatrix.map(a=>a.slice()) //line of deep clone array
    
    for(let i=0 ; i<=size ; i++){
      for(let j=i+1 ; j<size ; j++){
        let temp = tempa[j][i]/tempa[i][i]  
        for(let k=0 ; k<=size ; k++){
          let sol = temp*tempa[i][k] 
          tempa[j][k] = tempa[j][k]-sol
        }
        
        
          calmatrix[i] = tempa
          let tmpstep = []
          for(let a=0; a<size ; a++){
            tmpstep.push(<div>{calmatrix[i][a]+" "}</div>)
          }
          calstep[i].push(<div className={"step"}>step{roundtri++}{tmpstep}</div>)
      }
      
    }
    
    
    let arrans = []
    arrans[size] = tempa[size-1][size]/tempa[size-1][size-1]
    
    //Backward Subsitution
    for(let i=size-1 ; i>=1 ; i--){
      arrans[i] = tempa[i-1][size]
      for(let j=i+1 ; j<=size ; j++){
        let tempind = tempa[i-1][j-1]*arrans[j]
        
        arrans[i] = arrans[i]-tempind
        
      }
      arrans[i] = arrans[i]/tempa[i-1][i-1]
    }
    
    let ind = 0
    let listans = []
    for(let i=1 ; i<=size ; i++){
      listans[ind] = arrans[i].toFixed(2)
      ind++
    }
  
  
    

    //output on page
    let ans = []
    for(let i=1 ; i<arrans.length ; i++){
      ans.push(<div>x{i}={arrans[i].toFixed(6)}</div>)
    }
    setmatrix({a:matrix.a,b:ans,c:calmatrix,d:calstep,e:matrixA,f:tempb,g:listans})
  }


  return (
    <div className='gausselimination'>
        <br></br>
      <h3>GaussElimination</h3><br></br>
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
      </div><br/><br/>
      <div className='matrix f'>
        {
          matrix.d
        }<br/>
      </div>
      <br/><br/>
      
    </div>
  )
}

export default GaussElimination