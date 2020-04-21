import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './redux';

const HooksCakeContainer = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    
    return (
        <div>
            <h3>Nubmer of Cakes: {numOfCakes}</h3>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;