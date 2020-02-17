import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./mycomponents/Navigation";
import Home from "./mycomponents/Home";
import About from "./mycomponents/About";
import Contact from "./mycomponents/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "home"
    };
    this.changeHomeScreen = this.changeHomeScreen.bind(this);
    this.changeAboutScreen = this.changeAboutScreen.bind(this);
    this.changeContactScreen = this.changeContactScreen.bind(this);
  }
  changeHomeScreen() {
    this.setState({
      screen: "home"
    });
  }
  changeAboutScreen() {
    this.setState({
      screen: "about"
    });
  }
  changeContactScreen() {
    this.setState({
      screen: "contact"
    });
  }
  render() {
    return (
      <div className="App">
        <Navigation
          HomeScreen={this.changeHomeScreen}
          AboutScreen={this.changeAboutScreen}
          ContactScreen={this.changeContactScreen}
        />
        {this.state.screen === "home" && <Home />}
        {this.state.screen === "about" && <About />}
        {this.state.screen === "contact" && <Contact />}
      </div>
    );
  }
}

export default App;
