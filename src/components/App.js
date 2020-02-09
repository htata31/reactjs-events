import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Homepage from './Hompage';

/**
 * Using "https://jsonplaceholder.typicode.com/users" api I have implemented the application
 */
class App extends Component{
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render(){
  return (
    <div>
      <Header title = 'React Bootstrap Meetup Application'/>
      <Homepage contacts={this.state.contacts} />
    </div>
  );
  }
}

export default App;
