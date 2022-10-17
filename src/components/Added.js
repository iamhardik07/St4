import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Football from './Football';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>Personal Informtion</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone number</th>
            <th>State</th>
          </tr>

        </thead>
        <tbody>
          {
            Football.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>
                  <td>{item.d}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

