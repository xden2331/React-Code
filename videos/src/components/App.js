import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideolList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('Huawei');
    }

    onTermSubmit = async (terms) => {
        const response = await youtube.get('/search', {
            params: {
                q: terms
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        if(!this.state.selectedVideo){
            return (
                <div className='app'>
                    <div className='ui'>
                        <div className='ui active dimmer'>
                            <div className='ui loader'></div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className='app ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;