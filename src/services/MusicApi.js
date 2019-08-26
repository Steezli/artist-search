export const getArtists = (artists, offset = 0) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25&offset=${offset}`)
    .then(res => {
      if(!res.ok) throw 'Could not get the artists.';
      return console.log('Successfully retrieved artists!'), res.json();
    });
};

export const getReleases = (id, offset = 0) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${offset}`)
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

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      if(!res.ok) throw 'Could not get the songs for that release.';
      return console.log(`Successfully retrieved ${title}'s lyrics!`), res.json();
    });
};

