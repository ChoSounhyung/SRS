import React from 'react'
import { HashRouter, Route} from "react-router-dom";
import Smti from "./routes/Smti";
import List from "./routes/List";
import Navigation from "./components/Navigation";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
        <Navigation />
        <Route path="/list" exact={true} component={List} />
        <Route path="/smti" exact={true} component={Smti} />
      </HashRouter>
      <p><small>This stop is </small>Sinsa-ri Station</p>
      </div>
    );
  }
}

export default App;
