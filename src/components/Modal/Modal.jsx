import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/operations';
import { useNavigate } from 'react-router-dom';

const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleYesBtnClick = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={() => handleYesBtnClick(id)} type="button">
        Yes
      </button>
      <button onClick={closeModal} type="button">
        No
      </button>
    </div>
  );
};

export default Modal;
