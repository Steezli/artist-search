import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Artist({ artist }) {
  return (
    <Link to={`/artist/${artist.name}/${artist.id}`}>
      <p>{artist.name}</p>
    </Link>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string
  })
};
