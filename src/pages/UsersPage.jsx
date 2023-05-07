import { useEffect } from 'react';
import { getUsers } from 'redux/users/operations';
import { selectUsers } from 'redux/users/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Users page</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.user}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
