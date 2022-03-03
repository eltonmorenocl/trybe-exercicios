import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ValidEmail from './ValidEmail'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }


render() {
  const { email, saveEmail } = this.state;
  return (
    <div className="App">
      <header className="App-header">
      <label htmlFor="id-email">
        Email
        <input 
          id="id-email" 
          type="email" 
          onChange={ (e) => this.changeEmail(e.target.value) }
          value={ email }
        />
      </label>
      <input 
        id="btn-send"
        type="button"
        data-testid="id-send"
        value="Enviar"
        onClick={ () => this.changeSaveEmail(email) }
      />
      <input id="btn-back" type="button" value="Voltar" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <ValidEmail email={ saveEmail } />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
