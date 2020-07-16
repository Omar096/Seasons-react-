import React from "react";
import ReactDOM from "react-dom";
import SeasonDis from './SeasonDisplay'
import Loading from './Loading'
// geolocation take a time so we use class
// rulses of class component
//js class
//extend from  React.Component
//define render method
class App extends React.Component {
  //inasialize state
  // state is obj contain data of component
  //another way to insizlize state
  state = { lat: null, ErrorMss: "" };
  /*constructor(props) {
    super(props);
    this.state = { lat: null, ErrorMss: "" };
  }*/
  //called when component first rendered
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => {
        //updating the state using only set state
        this.setState({ lat: postion.coords.latitude });
      },
      (err) => {
        this.setState({ ErrorMss: err.message });
      }
    );
  }

  render() {
    //refrence state using this
    if (this.state.lat && !this.state.ErrorMss) {
      return <SeasonDis lat={this.state.lat}/>;
    } else if (!this.state.lat && this.state.ErrorMss) {
      return <div> Error: {this.state.ErrorMss}</div>;
    } else {
      return <Loading  message="Please Accept Location Request"/>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
