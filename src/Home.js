import React from 'react'
import { HashRouter, Route} from "react-router-dom";
import Smti from "./routes/Smti";
import List from "./routes/List";
import Navigation from "./components/Navigation";
import "./Home.css"

class Home extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Navigation />
          <Route path="/list" exact={true} component={List} />
          <Route path="/smti" exact={true} component={Smti} />
        </HashRouter>
      </div>
    );
  }
}

export default Home;
