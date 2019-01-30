import "./styles.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  return(
    
    );
}

export default App;
