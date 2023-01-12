import React from "react";
import Coresub from "./Coresub";

export default function CS207() {
  const tenjune23 = {
    date: " 10 jan 2023",
    firstbody: [
      <>
        <h4>
          alogritm is a finite set of instruction to complete a task which
          accomplises a task
        </h4>
        <p>
          pseudo code is a generic way of describing an Alogrithm without use of
          any specific programming language syntax. It consists of short ,
          English phrases use to explain specific task
        </p>
        <p>
          The purpose of using pseudo code is that it is easier for human to
          understand
        </p>
        <h2>what is a program?</h2>
        <p>
          A program is a language specific implementatin of the alogritm <br />{" "}
          An algoritm when expressed in some progamming language is called a
          program
        </p>
        <h2>general rules for calculating run time</h2>
        <h5>rule-1(for loop)</h5>
        <ol>
          <li>s = 0</li>
          <li> for i = 1 to n</li>
          <li>s = s + a[i]</li>
        </ol>
        <p>
          in this code step 1 takes O(1) time and 2 takes O(n+1) and 3 takes
          O(n) <br /> Therefore the time complexity of the code is O(n)
        </p>
        <h5>rule-2 (nested for loop)</h5>
        <ol>
          <li>for i = 1 to m</li>
          <li>for j = 1 to m</li>
          <li>s = s + A[ i,j]</li>
        </ol>
        <p>
          here we have to do sum of o(m) from 1 to m <br /> Therefore the
          timecomplexity is O(m*m)
       
        <h5>rule-3 (consecutive statement)</h5>
        
          for example we have two comsecutive code p1 and p2 of timecomplexity
          O(t1) and O(t *t) then we have to following method to calculate the
          timecomplexity of the code
        </p>
        <ol>
          <li>max(t1,t*t)</li>
          <li>max(O(t1),O(t*t))</li>
          <li>result = O(t*t)</li>
        </ol>
      </>,
    ],
  };
  const elejune23 = {
    date: " 11 june 2023",
    firstbody: [
      <>
        <h5>rule-4 (if else)</h5>
        <p>
          let there be a condition of if else statement if ture p1 will run else
          p2 <br /> p1 takes O(n*n) and p2 O(n) the to calculate the
          timecomplexity of the whole code we have the following method
        </p>
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
        <h5>other programs</h5>
        <ol>
          <li>factorial(n)</li>
          <li>if n less or equal to 1</li>
          <li>return 1</li>
          <li>else</li>
          <li>return n* factorial (n -1 )</li>
          <p>timecomplexity = O(n)</p>
        </ol>
        <h5>computing the timecomplexity of the follwoing programs</h5>
        <h6>first</h6>
        <p>
          <ol>
            <li>sum(n)</li>
            <li>i = 1</li>
            <li>while( i lessand equal to n) do</li>
            <li>s = s + 1</li>
            <li>i = i + 1</li>
            <li>return s</li>
          </ol>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">operation</th>
                <th scope="col">cost</th>
                <th scope="col">repetations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>c1</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>c2</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>c3</td>
                <td>n+1</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>c4</td>
                <td>n</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>c5</td>
                <td>n</td>
              </tr>
            </tbody>
          </table>
          then we get t(n) = c1 + c2 + c3(n+1) + c4n + c5n <br />
          = (c3+ c4 + c5)n + (c1 + c2 + c3) <br />
          taking first part as a and the other as b we get <br />= an + b
        </p>
        <h5>
          product of two matrix say a with dimesnion l * n and b with n * p
        </h5>
        <p>
          <ul>
            <li>for i = 1 to m </li>
            <li>for j = 1 to p</li>
            <li>c[i,j] = 0</li>
            <li>for k= 1 to n</li>
            <li>c[i,j] = c[i,j] + a[i,k] * b[k,j]</li>
            <li>return c</li>
          </ul>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">operation</th>
                <th scope="col">cost</th>
                <th scope="col">repetations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>c1</td>
                <td>m+1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>c2</td>
                <td>m * (p + 1)</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>c3</td>
                <td>m * p</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>c4</td>
                <td>m * p * (n + 1)</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>c5</td>
                <td>m * p * n</td>
              </tr>
            </tbody>
          </table>
          T(mpn) = C1(m+1) * c2m(p+1) * c3(mp) * c4(mp(n+1) + c5mpn) <br />
          = O(mpn)
          if m = p = n then we get O(n*n*n)
        </p>
      </>,
    ],
  };
  return (
    <>
      <Coresub date={tenjune23.date} firstbody={tenjune23.firstbody} />
      <Coresub date={elejune23.date} firstbody={elejune23.firstbody} />
      <Coresub date= "12 june 2023" firsttitle="mass bunk was conducted due to scarcity of water"/>
    </>
  );
}
