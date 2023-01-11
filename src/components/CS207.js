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
            <h2>general rules for calculating run time</h2>
            <h5>rule-1(for loop)</h5>
            <ol>
              <li>s = 0</li>
              <li> for i = 1 to n</li>
              <li>s = s + a[i]</li>
            </ol>
            <p>in this code step 1 takes O(1) time and 2 takes O(n+1) and 3 takes O(n) <br /> Therefore the time complexity of the code is O(n)</p>
            <h5>rule-2 (nested for loop)</h5>
            <ol>
              <li>for i = 1 to m</li>
              <li>for j = 1 to m</li>
              <li>s = s + A[ i,j]</li>
            </ol>
            <p>here we have to do sum of o(m) from 1 to m <br /> Therefore the timecomplexity is O(m*m)</p>
            <h5>rule-3 (consecutive statement)</h5>
            <p>for example we have two comsecutive code p1 and p2 of timecomplexity O(t1) and O(t *t) then we have to following method to calculate the timecomplexity of the code</p>
            <ol>
              <li>max(t1,t*t)</li>
              <li>max(O(t1),O(t*t))</li>
              <li>result = O(t*t)</li>
            </ol>         
            </>
        ]       
    }
    const elejune23 = {
      date: " 11 june 2023",
      firstbody: [
        <>
        <h5>rule-4 (if else)</h5>
        <p>let there be a condition of if else statement if ture p1 will run else p2 <br /> p1 takes O(n*n) and p2 O(n) the to calculate the timecomplexity of the whole code we have the following method</p>
        <ol>
          <li>max(O(n*n),O(n))</li>
          <li>O(n*n)</li>
        </ol>
        <h5>rule-5(white loop)</h5>
        <p>example 1</p>
        <ol>
          <li>while(n lessthan 0)</li>
          <li>i = i + 1</li>
          <li> n = n/2</li>
        </ol>
        <p>this code has O(logn with base 2)</p>
        <p>example 2</p>
        <ol>
          <li>while(n lessthan 0)</li>
          <li>i = i + 1</li>
          <li> n = n -1</li>
        </ol>
        <p>this code has O(n)</p>
        </>
      ]
    }
  return (
    <>
        <Coresub date= {tenjune23.date} firstbody = {tenjune23.firstbody}/>
        <Coresub date= {elejune23.date} firstbody = {elejune23.firstbody}/>
    </>
  )
}
