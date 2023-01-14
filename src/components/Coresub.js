import React from 'react'



export default function Fourthsub(props) {
  
  return (
    <div id='coresub' className='mx-auto' style={{marginTop:'100px',backgroundColor:"white",display:'inline-block',width:"90vw"}}>
      
        <div className="container">
          <h1 style={{textAlign:"center"}}>{props.date}</h1>
          <div className="container">
            <h3>{props.firsttitle}</h3>
            {props.firstbody}      

          </div>
        </div>
      
    </div>
  )
}
