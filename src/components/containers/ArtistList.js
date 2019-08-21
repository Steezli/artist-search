import React, { PureComponent } from 'react';
import Artists from '../Artists';
import { getArtists } from '../../services/MusicApi';

export default class ArtistList extends PureComponent {

  state = {
    artists: []
  }

  fetchArtists = () => {
    getArtists()
      .then(artists => this.setState({ artists: artists.artists }));
  }

  componentDidMount() {
    this.fetchArtists();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.count !== this.props.count)
  //     this.fetchArtists();
  // }

  render() {
    const { artists } = this.state;

    return <Artists artists={artists} />;
  }
}
