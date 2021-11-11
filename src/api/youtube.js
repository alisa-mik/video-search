import axios from 'axios';

const KEY = 'AIzaSyBtm0kZ3O2lrhxUrOWVYPIm0lxrcNkxzuM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        // type: 'video',
        maxResults: 5,
        key: KEY
    }
})