import React from 'react';
import { connect } from 'react-redux'; 


const songDetail = (props) => {

    if (!props.song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details of song:</h3>
            <div>
            Song title: {props.song.title}
            <br/>
            Duration: {props.song.duration}
            </div>
            </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state.selectedSong)
    return {
        song: state.selectedSong
    }
}


export default connect(mapStateToProps)(songDetail);