import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import placeholderCover from '../../../assets/placeholderCover.png';

export default function Releases({ releases, artist }) {
  const releaseList = releases.map((release) => {
    const coverArt = release['cover-art-archive'].count ? `http://coverartarchive.org/release/${release.id}/front-250` : placeholderCover;
    return (
      <li key={release.id}>
        <Release release={release} artist={artist} />
        <img src={coverArt} />
      </li>
    );
  });

  return (
    <ul>{releaseList}</ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};
