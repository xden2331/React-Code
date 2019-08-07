import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {
      title: 'Breakthrough',
      duration: '5:05'
    },
    {
      title: 'Happy',
      duration: '3:34'
    },
    {
      title: 'What is love?',
      duration: '3:15'
    }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
