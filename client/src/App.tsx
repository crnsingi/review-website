import React from 'react';
import { Router } from 'express';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Routh path="/add-review" component={AddReview} />
      </Switch>
    </Router>
  )
}


export default App;
