import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/users/operations';
import { useParams } from 'react-router-dom';
import { selectCurrentUser } from 'redux/users/selectors';
import Modal from 'components/Modal/Modal';

const UserDetailsPage = () => {
  const [userId, setUserId] = useState('');

  const { id } = useParams();
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const closeModal = () => {
    setUserId('');
  };

  return (
    <>
      <h1>User details page</h1>
      {currentUser && (
        <>
          <p>Name: {currentUser.user}</p>
          <p>Tweets: {currentUser.tweets}</p>
          <p>Followers: {currentUser.followers}</p>
          <button onClick={() => setUserId(currentUser.id)} type="button">
            Delete
          </button>
          {userId && <Modal id={userId} closeModal={closeModal} />}
        </>
      )}
    </>
  );
};

export default UserDetailsPage;
