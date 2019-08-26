import React, { PureComponent } from 'react';
import Releases from '../releases/Releases';
import { getReleases } from '../../services/MusicApi';

export default class DisplayReleases extends PureComponent {
  state = {
    releases: [],
    releaseCount: 0,
    offset: 0
  }

  componentDidMount() {
    getReleases(this.props.match.params.id)
      .then(({ releases, count }) => {
        this.setState({ releases, releaseCount: count });
      });
  }

  fetchReleases = () => {
    getReleases(this.props.match.params.id, this.state.offset)
      .then(({ releases, count }) => { 
        this.setState({ releases, releaseCount: count });
      });
  }

  pageForward = () => {
    this.setState(state => ({ offset: state.offset + 25 }), () => {
      this.fetchReleases();

    });
  }

  pageBack = () => {
    this.setState(state => ({ offset: state.offset - 25 }), () => {
      this.fetchReleases();
    });
  }

  render() {
    return (
      <>
        <button onClick={() => this.pageBack()}>←</button>
        <button onClick={() => this.pageForward()}>→</button>
        <Releases releases={this.state.releases} artist={this.props.match.params.artist} />
      </>
    );
  }
}
