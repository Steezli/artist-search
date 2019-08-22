import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

export default function Releases({ releases }) {
  const releaseList = releases.map((release) => (
    <li key={release.id}>
      <Release release={release} />
    </li>
  ));

  return (
    <ul>{releaseList}</ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.array.isRequired
};
