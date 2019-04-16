import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Table from "./components/Table";
import Search from "./components/Search";
import { runInThisContext } from "vm";

class App extends Component {
  state = {
    tickets: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Ticket Master API</header>
        <Search />
        <Table tickets={this.state.tickets} />
      </div>
    );
  }

  componentDidMount = async () => {
    const tickets = await this.fetchTickets();
    this.setState({
      tickets
    });
  };

  fetchTickets = async () => {
    const { data } = await axios.get(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=VI0hemXJuLfE0mhX3uAjMvvNMF2uMB5y"
    );
    return data._embedded.events;
  };
}

export default App;
