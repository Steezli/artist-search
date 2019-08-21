export const GetArtists = artists => {
  return fetch('http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25', {
    method: 'GET',
    body: JSON.stringify({ artists: artists }),
    Header: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get artists';
      return console.log('Success!', json);
    });
};

export const GetArtist = artist => {
  return fetch('http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json', {
    method: 'GET',
    body: JSON.stringify({ artists: artist }),
    Header: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get artist';
      return console.log('Success!', json);
    });
};

export const GetCoverArt = coverArt => {
  return fetch('http://coverartarchive.org/release/<RELEASE_ID>/front', {
    method: 'GET',
    body: JSON.stringify({ release: coverArt }),
    Header: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get cover art';
      return console.log('Success!', json);
    });
};

export const Getlyrics = lyrics => {
  return fetch('http://coverartarchive.org/release/<RELEASE_ID>/front', {
    method: 'GET',
    body: JSON.stringify({ song: lyrics }),
    Header: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get song lyrcis';
      return console.log('Success!', json);
    });
};

export const GetSongs = songs => {
  return fetch('http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json', {
    method: 'GET',
    body: JSON.stringify({ songs: songs }),
    Header: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get song lyrcis';
      return console.log('Success!', json);
    });
};

