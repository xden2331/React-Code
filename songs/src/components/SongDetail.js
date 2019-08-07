import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div className='song-detail'>No Song Selected</div>
    }
    return (
        <div className='song-detail ui content'>
            <div className='header'>
                {song.title}
            </div>
            <div className='description'>
                {song.duration}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);