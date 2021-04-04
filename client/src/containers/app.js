import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Fury_Header from './layout/header';
import Fury_Footer from './layout/footer';
import LandingPage from './home/landingpage'
import About from './home/about'
import Help from "./help";
import _Component_ from "./components/component";

const App = () => (
  <div class="h-100">
    <Fury_Header/>

    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/component" component={_Component_}/>
      <Route exact path="/help" component={Help} />
      <Route exact path="/about-us" component={About} />
    </Switch>

    <Fury_Footer/>
  </div>
)

export default App
