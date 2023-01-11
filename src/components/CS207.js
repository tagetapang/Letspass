import React from 'react'
import Coresub from './Coresub'

export default function CS207() {
    const tenjune23 = {
        date: " 10 jan 2023",
        firstbody: [
            <>
            <h4>alogritm is a finite set of instruction to complete a task which accomplises a task</h4>
            <p>pseudo code is a generic way of secribing an Alogrithm without use of any specific programming language syntax. It consists of short , English phrases use to explain specific task</p>
            <p>The purpose of using pseudo code is that it is easier for human to understand</p>
            <h2>what is a prgoram?</h2>
            <p>A program is a language specific implementatin of the alogritm <br /> An algoritm when expressed in some progamming language is called a program</p>
            </>

        ]
        
    }
  return (
    <>
        <Coresub date= {tenjune23.date} firstbody = {tenjune23.firstbody}/>
    </>
  )
}
