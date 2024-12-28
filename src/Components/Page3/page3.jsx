import React from 'react'

export default function Page3() {
    const style1={
        marginTop:"100px",
        width:"300px"
    }
  return (
    <div id='page3' >
    <div style={style1}>
      <h1>New In Store Now</h1>
      <p>Get the latest items immediately with promo prices</p>
      <button>Check All <i className="fa-solid fa-arrow-right"></i></button>
    </div>

    <div id='imgcontainer'>
        <figure>
        <img src={require('./image1.png')}></img>
        <figurecaption>Chair</figurecaption>
        </figure>
        <figure>
        <img src={require('./image2.png')}></img>
        <figurecaption>Bed</figurecaption>
        </figure>
        <figure>
        <img src={require('./image3.png')}></img>
        <figurecaption>Clipboard</figurecaption>
        </figure>
        <figure>
        <img src={require('./image4.png')}></img>
        <figurecaption>Lightning</figurecaption>
        </figure>
    </div>
    </div>

  )
}
