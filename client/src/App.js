import React from 'react';
import './App.css';

import LoginForm from './Components/LoginForm';
import Welcome from './Components/Welcome';
import ListElement from './Components/ListElement';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  signIn(username, password) {

    // get data from API
    const response = fetch("http://localhost:3001/account/signIn/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    }).then(res => { return (res.json()) })
      .then(
        result => {
          if (result.data.length > 0) {
            this.setState({
              user: {
                username: result.data[0].username,
                password: result.data[0].password
              },
              errorMessage: null
            })
          }
          else {
            this.setState({
              errorMessage: "Hatalı Giriş Yaptınız"
            })
          }
        });
  }

  signOut() {
    this.setState({ user: null })
  }

  render() {
    return (
      <div>
        <h1>Inventory Management</h1>
        {
          <a> {this.state.errorMessage} </a>
        }
        {

          (this.state.user) ?
            <div>
              <Welcome user={this.state.user} onSignOut={this.signOut.bind(this)} />
              <div>
                <ul>
                  <ListElement />
                </ul>
              </div>
            </div>

            :

            <LoginForm onSignIn={this.signIn.bind(this)} />
        }
      </div>
    )
  }
}