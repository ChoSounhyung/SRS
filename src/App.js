import React from 'react'
import { HashRouter, Route} from "react-router-dom";
import List from "./routes/Smti";
import Smti from "./routes/List";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path="/list" exact={true} component={List} />
        <Route path="/smti" exact={true} component={Smti} />
      </HashRouter>
    );
  }
}

export default App;
