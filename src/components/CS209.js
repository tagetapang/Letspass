import Coresub from './Coresub'
import React from 'react'

export default function CS209() {
  const tenjan23 = {
    date: "10 jan 2023",
    firsttitle: "features of system software",
    firstbody: [
      <ul>

        <li>System software consist of a variety of program that support operation of computer</li>
        <li>it is a set of program to perform a variety of system functions of file editing, resource management, I/o management and storage management</li>
        <li>The characteristic in which system software differs from application software is machine depedency</li>
        <li>The application program is primarily concern with the solution of some problem using the computer as a tool.</li>
        <li>System programs on the other hand are intendend to support the operation and use of the computer itself, rather than any particluar application. <br /> for this reason they are usually related to the artitecture of the machine in which they learn for example :- <br />assebler translate mnemonic instruction into machine code. The instruction formate, adressing mode are tthe direct concern in assembler design</li>
      </ul>
      

        
      

      
     ]
     
   

  }
  return (
    <div>
        <Coresub date={tenjan23.date} firsttitle={tenjan23.firsttitle} firstbody ={tenjan23.firstbody}/>
        <Coresub date="11 jan 2023" firsttitle= " class  of cs209 was not held on this date"/>
        <Coresub date= "12 june 2023" firsttitle="mass bunk was conducted due to scarcity of water"/>
      
    </div>
  )
}
