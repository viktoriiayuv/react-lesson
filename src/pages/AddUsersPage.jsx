import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addUser } from 'redux/users/slice';

const AddUsersPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;

      case 'age':
        setAge(inputValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { id: nanoid(), name, age, status: 'offline' };
    dispatch(addUser(newUser));
    navigate('/');
  };

  return (
    <>
      <h1>Add Users Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input onChange={handleChange} type="text" value={name} name="name" />
        </label>
        <label>
          Age:{' '}
          <input onChange={handleChange} type="number" value={age} name="age" />
        </label>
        <button type="submit">Add user</button>
      </form>
    </>
  );
};

export default AddUsersPage;
