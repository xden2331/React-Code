import axios from 'axios';
import keys from '../Api_Key/key';

const KEY = keys.YOUTUBE_PUBLIC_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});