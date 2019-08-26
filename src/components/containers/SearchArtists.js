import React, { PureComponent } from 'react';
import Artists from '../artists/Artists';
import { getArtists } from '../../services/MusicApi';
import Input from '../Input';
// import Pagination from '../Pagination';


export default class ArtistList extends PureComponent {
  state = {
    artists: [],
    artist: '',
    artistCount: 0,
    offset: 0
  }


  inputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  fetchArtists = () => {
    getArtists(this.state.artist, this.state.offset)
      .then(({ artists, count }) => { 
        this.setState({ artists, artistCount: count });
      });
  }

  onSearch = () => {
    return this.fetchArtists();
  }

  pageForward = () => {
    this.setState(state => ({ offset: state.offset + 25 }), () => {
      this.fetchArtists();

    });
  }

  pageBack = () => {
    this.setState(state => ({ offset: state.offset - 25 }), () => {
      this.fetchArtists();
    });
  }

  render() {
    return (
      <>
        <Input artist={this.state.artist}
          inputChange={this.inputChange}
          onSearch={this.onSearch}
        />
        <button onClick={() => this.pageBack()}>←</button>
        <button onClick={() => this.pageForward()}>→</button>
        <Artists artists={this.state.artists} />
      </>
    );
  }
}
