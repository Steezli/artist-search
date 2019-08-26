import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchArtists from './containers/SearchArtists';
import DisplayReleases from './containers/DisplayReleases';
import DisplaySongs from './containers/DisplaySongs';
import Lyrics from './Lyrics';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchArtists} />
        <Route path="/lyrics/:artist/:title" component={Lyrics} />
        <Route path="/release/:artist/:release/:id" component={DisplaySongs} />
        <Route path="/artist/:artist/:id" component={DisplayReleases} />
      </Switch>
    </Router>
  );
}

export default App;
