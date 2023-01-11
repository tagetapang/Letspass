import React from 'react'

export default function Fourthsub(props) {
  
  return (
    <div id='cs-209' style={{marginTop:'100px'}}>
      
        <div className="container" style={{border:"2px solid black"}}>
          <h1 style={{textAlign:"center"}}>{props.date}</h1>
          <div className="container">
            <h2>{props.firsttitle}</h2>
            {props.firstbody}
            <h2>{props.secondtitle}</h2>
            {props.secondbody}
            
            
            

          </div>
        </div>
      
    </div>
  )
}
