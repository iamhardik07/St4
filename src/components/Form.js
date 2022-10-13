import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Form() {
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [rating, setrating] = useState('');
  const [playerstate, setstate] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = position, b = player, c = rating, d = playerstate;
    Cricketers.push({ a, b, c, d});
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div className='background'>
      
      <h1 className='head1'>Football Registration Form</h1>
      <form className='container'>
        <label>PLAYER NAME</label><br></br>
        <input type="text"   placeholder='Enter Name' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        <label>Age</label><br></br>
        <input type="number"   placeholder='Enter Age' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label >Phone Number</label><br></br>
        <input type="number" placeholder='Phone number' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <label>STATE</label><br></br>
        <input type="text"   placeholder='Enter State' onChange={(e) => setstate(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      

    </div>
  )
}
