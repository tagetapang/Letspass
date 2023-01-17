import React from 'react'
import Coresub from './Coresub'


export default function CS206() {
  const _16jun23 = {
    date: "16 june 2023",
    firstbody: [
      <>
      <h3>sir recommended some books <ul><li>m.morris mano</li> <li>william stallings</li></ul></h3>
      <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">artitecture</th>
              <th scope="col">organization</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>1.Abstract</td>
              <td>1.Implementation</td>
            </tr>
            <tr>
           
              <td>2.logical design</td>
              <td>2.physical design</td>
            </tr>
            <tr>
              
              <td>3.fundamental operation structure</td>
              <td>3.hardware component</td>
            </tr>
          </tbody>
        </table>
          <h3>there are two types of computer arthitecture</h3>
          <h1><ul><li>Von Neuman</li> <li>Harvard</li></ul></h1>
          <h3>memory unit</h3>
          <p>two types of memory primary -RAM and secondary- ROM. memory unit store data and program </p>
      </>
    ]
  }
  return (
    
    
    <div  className="d-flex flex-column">
        <Coresub date= "12 june 2023" firsttitle="mass bunk was conducted due to scarcity of water"/>
        <Coresub date= "13 june 2023" firsttitle="mass bunk was conducted due to scarcity of water"/>
        <Coresub date= {_16jun23.date} firstbody= {_16jun23.firstbody}/>

      
    </div>
    
  )
}
