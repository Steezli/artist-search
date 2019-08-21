import React, { PureComponent } from 'react';
import ArtistList from './containers/ArtistList';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <ArtistList />
      </>
    );
  }
}
