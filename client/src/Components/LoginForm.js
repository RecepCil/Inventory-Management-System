import React from 'react';

class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign In!</h3>
        Username: <input type="text" ref="username" placeholder="enter you username" /> <br />
        Password: <input type="password" ref="password" placeholder="enter password" /> <br />
        <input type="submit" value="Login" />
      </form>
    )
  }

}

export default LoginForm;