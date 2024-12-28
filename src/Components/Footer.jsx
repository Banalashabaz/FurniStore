import React, { useEffect, useState } from 'react'

export default function Footer() {
    const [date,setDate]=useState('')
    const style1={
        marginRight:'100px',
        marginLeft:'100px',
    }
  useEffect(()=>{
    setInterval(()=>{
        var now=new Date();
        setDate(now.getFullYear())
    },1000);
  },[])
    const logos=['fa-brands fa-instagram','fa-brands fa-facebook','fa-brands fa-twitter','fa-brands fa-github']
  return (
    <div id='foots'>
        <div id='first'>
            <h1>FurniShop</h1>
            <div id='logo'>
            {
                logos.map((x)=>{
                    return <button><i class={`${x}`}></i></button>
                })
            }
            </div><br />
            
        </div>
        <hr  style={style1}/>
        <h3>© Furnishop {date} - All Rights Reserved</h3>
    </div>
  )
}
