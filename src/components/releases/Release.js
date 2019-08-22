import React from 'react';
import PropTypes from 'prop-types';

export default function Release({ release }) {
  return (
    <>
      <p>{release.title}</p>
    </>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string
  })
};

