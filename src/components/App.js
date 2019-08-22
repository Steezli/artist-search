import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchArtists from './containers/SearchArtists';
import DisplayReleases from './containers/DisplayReleases';
import DisplaySongs from './containers/DisplaySongs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/release/:id" component={DisplaySongs} />
        <Route path="/artist/:id" component={DisplayReleases} />
        <Route path="/" component={SearchArtists} />
      </Switch>
    </Router>
  );
}

export default App;
