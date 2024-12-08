import { Router } from 'express';
import React from 'react';


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
