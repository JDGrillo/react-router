import React from 'react';
let ramenData = require('../data/ramen.json')

class Review extends React.Component {
    state = {
        country: null,
        ramen_brand: null,
        ramen_variety: null,
        review_score: null,
    }

    updateReview = () => {
        let randomIndex = Math.floor(Math.random() * 3180)
        this.state.country = ramenData[randomIndex]["country"]
        this.state.ramen_brand = ramenData[randomIndex]["brand"]
        this.state.ramen_variety = ramenData[randomIndex]["variety"]
        this.state.review_score = ramenData[randomIndex]["stars"]
        this.props.updateReview(this.state)
    }

    render() {
        return (
            <div class="center">
            <div class="random-button">
                <button onClick={this.updateReview}>
                    Select Random!
                </button>
            </div>
            <div class="review">
                <br></br>
                <p class="review-data">The country is {this.state.country}</p>
                <p class="review-data">The brand is {this.state.ramen_brand}</p>
                <p class="review-data">The variety is {this.state.ramen_variety}</p>
                <p class="review-data">The review is {this.state.review_score}</p>
            </div>
            </div>
        )
    }
}

export default Review;