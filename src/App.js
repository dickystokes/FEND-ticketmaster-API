import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from './components/Table';
import Search from './components/Search';
import Map from './components/Map';

class App extends Component {
  state = {
    tmEvents: [],
    nameFilter: ''
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Ticket Master API</header>
        <div id="mapid">
          <Map />
        </div>
        <Search formHandler={this.formHandler} setFilter={this.setFilter} />
        <Table tmEvents={this.state.tmEvents} />
      </div>
    );
  }

  componentDidMount = async () => {
    const tmEvents = await this.fetchEvents();
    this.setState({
      tmEvents
    });
  };

  formHandler = async event => {
    event.preventDefault();
    const tmEvents = await this.fetchEvents();
    this.setState({
      tmEvents
    });
  };

  fetchEvents = async () => {
    const { data } = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=VI0hemXJuLfE0mhX3uAjMvvNMF2uMB5y&keyword=${
        this.state.nameFilter
      }`
    );
    return data._embedded.events;
  };

  setFilter = (param, value) => {
    this.setState({
      [`${param}Filter`]: value
    });
  };
}

export default App;
