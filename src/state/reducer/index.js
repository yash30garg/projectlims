import {combineReducers} from 'redux';
import BbooksReducer from './bbooksReducer';
// import ActiveUserReducer from './reducer-active-user';


//   We combine all reducers into a single object before updated data is dispatched (sent) to store
//   Your entire applications state (store) is just whatever gets returned from all your reducers
 

const allReducers = combineReducers({
    bbooks: BbooksReducer
});

export default allReducers