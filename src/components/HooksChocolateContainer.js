import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyChocolate } from './redux';


const ChocolateContainer = props => {

    const numOfChocolates = useSelector(state => state.chocolate.numOfChocolates)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Number of Chocolates: {numOfChocolates}</h3>
            <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
        </div>
    )
}

export default ChocolateContainer;