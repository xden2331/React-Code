import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    // Take the list of songs
    renderList() {
        return this.props.songs.map((song, index) => {
            return (
                <div key={index} className='item'>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)}    
                        >
                            Select
                        </button>
                    </div>
                    <div className='content'>
                        <div className='header'>{song.title}</div>
                        <div className='description'>
                            {song.duration}
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className='song-list ui relaxed divided list'>
                {this.renderList()}
            </div>
        );
    }
}

// called with all the states in redux
// must return an object
// it means in one day, in our SongList class
// this.props === {songs: state.songs}
// rerun every time when state is modified
const mapStateToProps = (state) => {
    return { songs: state.songs};
}

// 第二个参数 warp action creator， 然后得到结果后转发给dispatch func
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);