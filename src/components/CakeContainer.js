import React, { useState } from 'react';
import  { connect } from 'react-redux';
import { buyCake } from './redux';

const CakeContainer = props => {

    const [ cakeNumber, setCakeNumber ] = useState(1);

    return (
        <div>
            <h3>Number of Cake: {props.numOfCakes}</h3>
            <input type="text" value={cakeNumber} onChange={ e => setCakeNumber(e.target.value) } /><br />
            <button onClick={() => props.buyCake(cakeNumber)}>Buy {cakeNumber} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: num => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);