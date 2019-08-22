import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Release({ release }) {
  return (
    <Link to={`/release/${release.id}`}>
      <p>{release.title}</p>
    </Link>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string
  })
};

