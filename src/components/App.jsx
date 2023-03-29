import { Component } from 'react';
import { nanoid } from 'nanoid';
import { data } from '../data/data';
import UserList from './UsersList/UsersList';
import Button from './Button/Button';
import Form from './Form/Form';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    users: data,
    isFormShown: false,
    currentAvatar: null,
  };

  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id),
    }));
  };

  addUser = user => {
    const newUser = {
      ...user,
      hasJob: false,
      id: nanoid(),
    };
    this.setState(prevState => ({ users: [...prevState.users, newUser] }));
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  openModal = img => {
    this.setState({ currentAvatar: img });
  };

  closeModal = () => {
    this.setState({ currentAvatar: null });
  };

  changeJobStatus = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user =>
        user.id === id ? { ...user, hasJob: !user.hasJob } : user
      ),
    }));
  };

  render() {
    const { users, isFormShown, currentAvatar } = this.state;
    return (
      <>
        <UserList
          users={users}
          deleteUser={this.deleteUser}
          openModal={this.openModal}
          changeJobStatus={this.changeJobStatus}
        />
        {isFormShown ? (
          <Form addUser={this.addUser} closeForm={this.closeForm} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
        {currentAvatar && (
          <Modal img={currentAvatar} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
