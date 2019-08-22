import React, { PureComponent } from 'react';
import Artists from '../Artists';
import { getArtists } from '../../services/MusicApi';
import Input from '../Input';

export default class ArtistList extends PureComponent {
  state = {
    artists: [],
    artist: ''
  }

  inputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  fetchArtists = () => {
    getArtists(this.state.artist)
      .then(({ artists }) => { 
        this.setState({ artists });
      });
  }

  onSearch = () => {
    return this.fetchArtists();
  }

  render() {
    return (
      <>
        <Input artist={this.state.artist}
          inputChange={this.inputChange}
          onSearch={this.onSearch} />
        <Artists artists={this.state.artists} />
      </>
    );
  }
}
