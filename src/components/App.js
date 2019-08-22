import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchArtists from './containers/SearchArtists';
import DisplayReleases from './containers/DisplayReleases';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={DisplayReleases} />
        <Route path="/" component={SearchArtists} />
      </Switch>
    </Router>
  );
}

export default App;
