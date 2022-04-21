import React from "react";
import ReactDOM from "react-dom";
// const App = () => {
//   return <div>Hello world</div>;
// };

class App extends React.Component {
  state = { latitude: null, errorMasage: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => (this.state.latitude = pos.coords.latitude),

      (err) => {
        this.state.errorMasage = err.message;
      }
    );
  }

  render() {
    if (this.state.latitude) {
      return <div>Hello world {this.state.latitude}</div>;
    }
    if (this.state.errorMasage) {
      return <div>Error: {this.state.errorMasage}</div>;
    }
    return <div> Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
