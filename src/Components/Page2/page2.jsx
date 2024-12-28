import React from 'react'
import photo from './page2img.png'
export default function Page2() {
  return (
    <div id='page2'>
        <img src={photo}  width='400px'/>
        <div id='subpage2'>
            <h2>We Create Your Home More Aestetic</h2>
            <p>Furnitre power is a software as services for multiperpose business management system</p>
             <div>
             <i className="fa-solid fa-circle-check"><span > Valuation Services</span><br /><p>Sometimes features require a short description.  This can be detailed description</p></i>
             <i className="fa-solid fa-circle-check"><span > Development of Furniture Models</span><br /><p>Sometimes features require a short description. This can be detailed description</p></i>
             </div>
        </div>
    </div>
  )
}
