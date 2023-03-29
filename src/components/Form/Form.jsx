import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      ...this.state,
    };
    this.props.addUser(newUser);
    this.props.closeForm();
  };

  render() {
    const { name, email, avatar } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Avatar
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={this.handleChange}
          />
        </label>
        <button>Save</button>
      </form>
    );
  }
}

export default Form;
