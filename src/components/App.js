import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import SearchArtists from './containers/SearchArtists';

function App() {
  return (
    <Router>
      <Route path="/" component={SearchArtists} />
    </Router>
  );
}

export default App;
