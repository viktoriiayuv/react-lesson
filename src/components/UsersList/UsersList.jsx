const UserList = ({ users, deleteUser, openModal, changeJobStatus }) => {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob, avatar }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Has job: {hasJob.toString()}</p>
            <button onClick={() => changeJobStatus(id)}>
              Change job status
            </button>
            <button onClick={() => openModal({ src: avatar, alt: name })}>
              Show avatar
            </button>
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
