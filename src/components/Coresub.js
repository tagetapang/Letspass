import React from 'react'



export default function Fourthsub(props) {
  
  return (
    <div id='cs-209' style={{marginTop:'100px'}}>
      
        <div className="container" style={{border:"2px solid black"}}>
          <h1 style={{textAlign:"center"}}>{props.date}</h1>
          <div className="container">
            <h3>{props.firsttitle}</h3>
            {props.firstbody}      

          </div>
        </div>
      
    </div>
  )
}
