// Library constructor function
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playLists = [];
}
// Library - prototype functions
// add playlist
Library.prototype.addPlaylist = function(playListName) {
  this.playLists.push(new Playlist(playListName));
};

// add track
Library.prototype.addTrack = function(
  playlistName,
  trackName,
  trackRating,
  trackLength
) {
  const currentPlaylist = this.playLists.find(pl => {
    if (pl.name === playlistName) {
      return pl;
    }
  });
  currentPlaylist.tracks.push(new Track(trackName, trackRating, trackLength));
};
// get playlist
Library.prototype.getPlaylist = function(playlistname) {
  return this.playLists.find(pl => {
    if (pl.name === playlistname) {
      return pl;
    }
  });
};
// get all playlists
Library.prototype.getAllPlaylists = function() {
  return this.playLists;
};
// get All tracks
Library.prototype.getAllTracks = function() {
  let alltracks = [];
  this.playLists.map(pl => {
    pl.tracks.map(tr => {
      alltracks.push(tr);
    });
  });
  return alltracks;
};
//get track of a playlist
Library.prototype.getAllTrackFromPlaylist = function(playlist) {
  const currentPlaylist = this.getPlaylist(playlist);
  return currentPlaylist.tracks;
};

// Playlist constructor function
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// Playlist - prototype functions

// Playlist.prototype.overallRating = function() {
//   return this.tracks.reduce((acc, cur) => {
//     return acc + cur.rating;
//   }, 0);
// };

// Playlist.prototype.totalDuration = function() {
//   console.log(this);
// };

// Track constructor function
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}
// Add new Library instance
const songCollection = new Library('songCollection', 'ravraw');
// Create Playlist

// Add playlist objects
songCollection.addPlaylist('Rock');
songCollection.addPlaylist('Jazz');
songCollection.addPlaylist('Blues');

// Add tracks
songCollection.addTrack('Rock', 'Rock1', 4, 180);
songCollection.addTrack('Rock', 'Rock2', 3, 220);
songCollection.addTrack('Rock', 'Rock3', 2, 150);
songCollection.addTrack('Jazz', 'Jass1', 4, 180);
songCollection.addTrack('Jazz', 'Jass2', 3, 220);
songCollection.addTrack('Jazz', 'Jass3', 2, 150);
songCollection.addTrack('Blues', 'Blues1', 4, 180);
songCollection.addTrack('Blues', 'Blues2', 3, 220);
songCollection.addTrack('Blues', 'Blues3', 2, 150);

// current songCollection
//songCollection.playLists.map(pl => console.log(pl));

//console.log(songCollection.playLists.map(pl => console.log(pl)));
// songCollection.playLists.map(pl => {
//   console.log(pl.overallRating());
// });
//console.log(songCollection.playLists);

//console.log(songCollection.getPlaylist('Rock'));
//console.log(songCollection.getAllTrackFromPlaylist('Rock'));
//console.log(songCollection.getAllPlaylists());
console.log(songCollection.getAllTracks());
