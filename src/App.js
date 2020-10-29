import React from 'react'
import { HashRouter, Route} from "react-router-dom";
import Sangjum_List from "./routes/Sangjum_List";
import Card_Game from "./routes/Card_Game";
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/sangjum_list" exact={true} component={Sangjum_List} />
      <Route path="/card_game" exact={true} component={Card_Game} />
    </HashRouter>
  );
}

export default App;
