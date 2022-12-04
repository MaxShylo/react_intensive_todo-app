import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Start: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const clickHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  }

  return (
    <form
      className="Start-container"
      onSubmit={clickHandler}
    >
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
    </form>
  )
}

export default Start;
