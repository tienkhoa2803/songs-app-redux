import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {title: 'Em cua ngay hom qua', duration: '4:30'},
        {title: 'Chay ngay di', duration: '5:03'},
        {title: 'Con mua ngang qua', duration: '4:50'},
        {title: 'Hay trao cho anh', duration: '6:01'},
        {title: 'Nang am xa dan', duration: '4:05'}
    ];
        
}

const selectedSongReducer = (selectedSong = '', action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})