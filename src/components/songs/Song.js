import React from 'react';
import PropTypes from 'prop-types';

export default function Song({ song }) {
  return (
    <>
      <p>{song.title}</p>
    </>
  );
}

Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string
  })
};
