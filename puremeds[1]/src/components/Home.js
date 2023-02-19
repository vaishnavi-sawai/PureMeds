import React, { useState } from 'react'
import Qr from './Qr'



const Home = () => {

  const [qrShow, setQrShow] = useState(false);
  const onClick = ()=>{
    if(qrShow){
      setQrShow(false);
    }
    else
    {
      setQrShow(true);
    }
  }
  return (
    <div>
      <button onClick={onClick}>Scan</button>
      {qrShow? <Qr/>:null}
      
    </div>
  )
}

export default Home
