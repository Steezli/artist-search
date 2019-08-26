import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

export default function Songs({ songs, artist }) {
  const songList = songs.map((song) => (
    <li key={song.id}>
      <Song song={song} artist={artist}/>
    </li>
  ));

  return (
    <ul>{songList}</ul>
  );
}

Songs.propTypes = { 
  songs: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};
