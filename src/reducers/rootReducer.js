let ramenData = require('../data/ramen.json')

const initialState = {
    country: "USA",
    ramen_brand: "Top Ramen",
    ramen_variety: "Chicken",
    review_score: "10",
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_REVIEW') {
        let randomIndex = Math.floor(Math.random() * 3180)
        state.country = ramenData[randomIndex]["country"]
        state.ramen_brand = ramenData[randomIndex]["brand"]
        state.ramen_variety = ramenData[randomIndex]["variety"]
        state.review_score = ramenData[randomIndex]["stars"]
        // this.props.updateReview(this.props)
        return {
            ...state
        }
    }
    return state;
}

export default rootReducer;