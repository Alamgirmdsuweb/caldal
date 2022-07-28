import { Home } from "./Home";
import SignIn from"./component/SignIn";
import Help from"./component/Help";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>

<div>
        

    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/help">
      < Help/>
    </Route>
    <Route path="/signIn">
      <SignIn/>
    </Route>
    
  </Switch>
  </div>
  </Router>
     


  
     
    
   
    
   
  );
}

export default App;



