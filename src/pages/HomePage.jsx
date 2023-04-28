import { useSelector } from 'react-redux';
import { getUsers } from 'redux/users/selectors';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/slice';

const HomePage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Home page</h1>
      <ul>
        {users.map(({ id, name, age, status }) => (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {status}</p>
            <button type="button" onClick={() => dispatch(deleteUser(id))}>
              Delete user
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
