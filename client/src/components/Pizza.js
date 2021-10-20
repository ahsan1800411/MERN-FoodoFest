import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function Pizza({ pizza }) {
  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt={pizza.name}
          className='img-fluid'
          style={{ width: '355px', height: '200px' }}
        />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Varients</p>
          <select
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
            className='form-control'
          >
            {pizza.varients.map((varient) => (
              <option key={varient} value={varient}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select
            className='form-control'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option value={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-2'>
            Price : {pizza.prices[0][varient] * quantity} Rs
          </h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn'>Add To Cart </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt={pizza.name}
            className='img-fluid'
            style={{ height: '400px' }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
