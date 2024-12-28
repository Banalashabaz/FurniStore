import React from 'react'
import Banner from './Banner.jsx'
import Footer from '../Footer.jsx'
export default function Page5() {
  const imagedata=[{"img":'./images/llight 1.png','title':'Ceiling Light','cost':"75.00"},{"img":'./images/llight 1-1.png','title':'Wood Chair','cost':"50.00"},
    {"img":'./images/llight 1-2.png','title':'Papper Cupboard','cost':"105.00"}
    ,{"img":'./images/llight 1-3.png','title':'Ole Gundorse Spring...','cost':"82.00"},{"img":'./images/llight 1-4.png','title':'Treos Seroes 911','cost':"200.00"},
    {"img":'./images/llight 1-5.png','title':'Multi bilderman slibber...','cost':"45.00"},{"img":'./images/llight 1-6.png','title':'XORA corner desk','cost':"320.00"},
    {"img":'./images/llight 1-7.png','title':'Black Forest Series wo...','cost':"225.00"},
   
  ]
  const style1={
    color:'grey'

  }

  return (
    <div id='page5'>
    <div >
      <h1>All Product</h1>
      <p>The products we provide only for you as our service are selected from the
      best products with number 1 quality in the world</p>
    </div>
    <div>
      <div id='images'>
      {
        imagedata.map((data)=>  {
            return  <> {
              <>
             <figure>
             <img src={require(`${data.img}`)} width='300px'></img>
             <figurecaption>{data.title} <br /><span style={style1}>${data.cost}</span></figurecaption>
             <div><i class="fa-solid fa-cart-shopping"></i></div>
             </figure>
              
              </>
            }
            </>
        })
      }
      </div>
      <Banner ></Banner>
      <div id='foot'>
        <Footer />
      </div>
    </div>
    </div>
  )
}
