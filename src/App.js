import React from 'react'
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home"
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
          <Route path="/" exact={true} component={Home} />
          <Route path="/list" component={List} />
          <Route path="/smti" component={Smti} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
