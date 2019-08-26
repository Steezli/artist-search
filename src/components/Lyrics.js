import React, { PureComponent } from 'react';
import { getLyrics } from '../services/MusicApi';

export default class Lyrics extends PureComponent {

  state ={ 
    lyrics: ''
  }

  componentDidMount() {
    getLyrics(this.props.match.params.artist, this.props.match.params.title)
      .then(res => {
        this.setState({ lyrics: res.lyrics });
        console.log(res, 'res');
      });
  }

  render() {
    const { lyrics } = this.state;
    return (
      <>
        <p>{lyrics} </p>
      </>
    );
  }
}
