import React from 'react';
import RandomButton from './RandomButton';
import Review from './Review'

class Feed extends React.Component {
    render() {
        return (
            <div class="center">
                <h1>This is the Ramen Page!</h1>
                <h3>Select the Button Below to View a Random Ramen Review!</h3>
                <br/>
                <RandomButton/>
                <Review/>
            </div>
        )
    }
}

export default Feed
