export const getArtists = (artists) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'Could not get the artists.';
      return console.log('Successfully retrieved artists!'), res.json();
    });
};

export const getReleases = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Could not get the artist releases.';
      return console.log(`Successfully retrieved ${id}'s releases!`), res.json();
    });
};

export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Could not get the songs for that release.';
      return console.log(`Successfully retrieved ${id}'s songs!`), res.json();
    });
};

// export const getlyrics = (lyrics) => {
//   return fetch('http://coverartarchive.org/release/<RELEASE_ID>/front')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Could not get song lyrcis';
//       return console.log('Success!', json);
//     });
// };

