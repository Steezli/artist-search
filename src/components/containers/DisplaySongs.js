import React, { PureComponent } from 'react';
import Songs from '../songs/Songs';
import { getSongs } from '../../services/MusicApi';

export default class DisplaySongs extends PureComponent {
  state = {
    songs: []
  }

  componentDidMount() {
    getSongs(this.props.match.params.id)
      .then(res => {
        this.setState({ songs: res.recordings });
      });
  }

  render() {
    return (
      <>
        <Songs songs={this.state.songs} />
      </>
    );
  }
}
