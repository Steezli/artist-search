export const getArtists = (artists) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get artists';
      return json;
    });
};

// export const getArtist = (artist) => {
//   return fetch(`http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json`)
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Could not get artist';
//       return console.log('Success!', json);
//     });
// };

// export const getCoverArt = (coverArt) => {
//   return fetch('http://coverartarchive.org/release/<RELEASE_ID>/front')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Could not get cover art';
//       return console.log('Success!', json);
//     });
// };

// export const getlyrics = (lyrics) => {
//   return fetch('http://coverartarchive.org/release/<RELEASE_ID>/front')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Could not get song lyrcis';
//       return console.log('Success!', json);
//     });
// };

// export const getSongs = (songs) => {
//   return fetch('http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Could not get song lyrcis';
//       return console.log('Success!', json);
//     });
// };
