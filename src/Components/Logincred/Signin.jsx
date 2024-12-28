import React, { useState } from 'react'

export default function Signin() {
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
function handlesubmit(e){
    e.preventDefault();
    console.log(email,name,password)
}
    
  return (
    <div id='signin'>
      <h1>Sign up</h1>
      <form onSubmit={handlesubmit} id='signinform'>
        <label><span>Full name</span> <br /> <br /><input type="text" name="name" id='name' placeholder='' onChange={(e)=>setName(e.target.value)}/></label><br />
        <label><span id='emailspan'>E-mail</span> <br /> <br /><input type="email" name="email" id='email' placeholder='' onChange={(e)=>setEmail(e.target.value)}/></label><br />
        <label><span>Password</span> <br /> <br /><input type="password" name="email" id='email' placeholder='' onChange={(e)=>setPassword(e.target.value)}/></label>
        <button type='submit'>signup</button>
        <p>Already have an account? <a href="#" style={{color:'orange'}}>Login</a></p>
      </form>

    </div>
  )
}
