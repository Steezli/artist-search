import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

export default function Songs({ songs }) {
  const songList = songs.map((song) => (
    <li key={song.id}>
      <Song song={song} />
    </li>
  ));

  return (
    <ul>{songList}</ul>
  );
}

Songs.propTypes = { 
  songs: PropTypes.array.isRequired
};
