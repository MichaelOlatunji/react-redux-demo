import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import chocolateReducer from './chocolate/chocolateReducers';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    users: userReducer
})

export default rootReducer