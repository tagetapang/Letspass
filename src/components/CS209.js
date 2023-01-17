import Coresub from "./Coresub";
import React from "react";

export default function CS209() {
  const tenjan23 = {
    date: "10 jan 2023",
    firsttitle: "features of system software",
    firstbody: [
      <ul>
        <li>
          System software consist of a variety of program that support operation
          of computer
        </li>
        <li>
          it is a set of program to perform a variety of system functions of
          file editing, resource management, I/o management and storage
          management
        </li>
        <li>
          The characteristic in which system software differs from application
          software is machine depedency
        </li>
        <li>
          The application program is primarily concern with the solution of some
          problem using the computer as a tool.
        </li>
        <li>
          System programs on the other hand are intendend to support the
          operation and use of the computer itself, rather than any particluar
          application. <br /> for this reason they are usually related to the
          artitecture of the machine in which they learn for example :- <br />
          assebler translate mnemonic instruction into machine code. The
          instruction formate, adressing mode are tthe direct concern in
          assembler design
        </li>
      </ul>,
    ],
  };
  const _16jun23 = {
    date:"16 june 2023",
    firstbody: [
      <>
      <h3>types of system software</h3>
      <ol>
        <li><strong>Operating system</strong> <br /> it is the most important system program that act as an interface between the user and application program</li>
        <li><strong>language translator</strong> <br />it is the program that takes an input program in 1 language and produces an ouput in another language<ul>
          <li> <b> compiler </b><br /> -a compiler is a language that translate program written in any high level language in to its equivalent machine understanable language <br />it cements gap between a program language domain and the execution domain</li>
          <li><b>interpreter</b> <br /> - it is a translator program that translate high to machine lvl. language and executes it immidiatly. The program instruction are taken line by line. The interpreter reads the source program and stores it in memory. <br />during interpritation it takes a source statement, determines its menaing and performs action which implements it. It includes computational and input output actions</li>
          <li><b>Assembler</b></li>
          <li><b>Pre proccessor</b></li>
        
        </ul></li>
        <li><strong>loader</strong></li>
        <li><strong>linkers</strong></li>
        <li><strong>micro-processor</strong></li>        

      </ol>
      <h3>two aspects of compilation </h3>
      <a href=""> click to learn</a>
      <h3>program counter</h3>
      <p>A program counter indicates which statement of the source program is to be interprited next. This statemetn would be subject to the interpritation cycle. <i>sir said to look thourght instruction cycle</i> <a href="">click</a></p>
      </>
    ]
  }
  return (
    <div className="d-flex flex-column">
      <Coresub
        date={tenjan23.date}
        firsttitle={tenjan23.firsttitle}
        firstbody={tenjan23.firstbody}
      />
      <Coresub
        date="11 jan 2023"
        firsttitle=" class  of cs209 was not held on this date"
      />
      <Coresub
        date="12 june 2023"
        firsttitle="mass bunk was conducted due to scarcity of water"
      />
      <Coresub
        date="13 june 2023"
        firsttitle="mass bunk was conducted due to scarcity of water"
      />
      <Coresub date={_16jun23.date} firstbody={_16jun23.firstbody} />
    </div>
  );
}
