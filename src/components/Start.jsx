import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const clickHandler = (event) => {
    if (name === '') {
      alert('Name is empty!!! Please, provide your name!');
    } else {
      navigate('/todos', {
        state: {
          userName: name,
        },
      });
    }
  }

  const handleChange = (event) => {
    const { value } = event.target;

    setName(value);
  }

  return (
    <div className="Start-container">
      <h1
        className='Start-container__title'
      >
        Hello, Please enter your name for start!
      </h1>

      <input
        className='Start-container__input'
        type="text"
        value={name}
        onChange={handleChange}
      />

      <button
        className='Start-container__button'
        onClick={clickHandler}>
        Start
      </button>
    </div>
  )
}

export default Start;
