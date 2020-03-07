import React from 'react';
let ramenData = require('../data/ramen.json')

class Review extends React.Component {
    state = {
        country: ramenData[0]["country"],
        ramen_brand: ramenData[0]["brand"],
        ramen_variety: ramenData[0]["variety"],
        review_score: ramenData[0]["stars"],
    }
    render() {
        return (
            <div class="review">
                <p>The country is {this.state.country}</p>
                <p>The brand is {this.state.ramen_brand}</p>
                <p>The variety is {this.state.ramen_variety}</p>
                <p>The review is {this.state.review_score}</p>
            </div>
        )
    }
}

export default Review;