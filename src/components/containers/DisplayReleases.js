import React, { PureComponent } from 'react';
import Releases from '../releases/Releases';
import { getReleases } from '../../services/MusicApi';

export default class DisplayReleases extends PureComponent {
  state = {
    releases: []
  }

  componentDidMount() {
    getReleases(this.props.match.params.id)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  }

  render() {
    return (
      <>
        <Releases releases={this.state.releases} />
      </>
    );
  }
}
