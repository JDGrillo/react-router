import React from 'react';
import Review from './Review'
let ramenData = require('../data/ramen.json')

class Ramen extends React.Component {
    state = {
        country: ramenData[0]["country"],
        ramen_brand: ramenData[0]["brand"],
        ramen_variety: ramenData[0]["variety"],
        review_score: ramenData[0]["stars"],
        isHidden: true
    }

    updateReview = (review) => {
        this.setState(
            review
        )
    }

    render() {
        return (
            <div class="center">
                <h1>This is the Ramen Page!</h1>
                <hr></hr>
                <h3>Select the Button Below to View a Random Ramen Review!</h3>
                <br/>
                <br/>
                <Review updateReview={this.updateReview}/>
            </div>
        )
    }
}

export default Ramen
