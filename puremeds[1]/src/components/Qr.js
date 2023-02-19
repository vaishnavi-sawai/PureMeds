import React from 'react'
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Qr = () => {

    const [data, setData] = useState('No result');

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle = {{"width":"30%"}}
        style={{ 'height': "50px", "border": "3px solid red" }}

      />
      <div className="d-flex small">
                <div className="center">
                    <div>
                            <div>
                                <h2 className="center-heading">Product Info</h2>
                                <div className="product-details">
                                    <p>Product Name : <span>
                                        {data}
                                    </span></p>

                                    <p>Product Price : <span>
                                        {data}
                                    </span></p>

                                    <p>Product ID : <span>
                                        {data}
                                    </span></p>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Qr
