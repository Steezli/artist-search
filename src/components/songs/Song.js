import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Song({ song, artist }) {
  return (
    <Link to={`/lyrics/${artist}/${song.title}`}>
      <p>{song.title}</p>
    </Link>
  );
}

Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  release: PropTypes.string,
  artist: PropTypes.string
};
