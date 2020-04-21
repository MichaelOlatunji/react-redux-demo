import React from 'react';
import  { connect } from 'react-redux';
import { buyIceCream } from './redux';

const iceCreamContainer = props => {

    return (
        <div>
            <h3>Number of Cake: {props.numOfIceCreams}</h3>

            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);