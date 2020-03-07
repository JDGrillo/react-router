import React from 'react';
import { connect } from 'react-redux';
let ramenData = require('../data/ramen.json')

class Review extends React.Component {
    // state = {
    //     country: null,
    //     ramen_brand: null,
    //     ramen_variety: null,
    //     review_score: null,
    // }

    handleClick = () => {
        console.log(this.props)
        this.props.updateReview();
    }

    render() {
        let review = this.props
        console.log(review)
        return (
            <div class="center">
            <div class="random-button">
                <button onClick={this.handleClick}>
                    Select Random!
                </button>
            </div>
            <div class="review">
                <br></br>
                <p class="review-data">The country is {review.country}</p>
                <p class="review-data">The brand is {review.ramen_brand}</p>
                <p class="review-data">The variety is {review.ramen_variety}</p>
                <p class="review-data">The review is {review.review_score}</p>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateReview: () => {
            dispatch({type: 'UPDATE_REVIEW'})
        }
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.country,
        ramen_brand: state.ramen_brand,
        ramen_variety: state.ramen_variety,
        review_score: state.review_score,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);