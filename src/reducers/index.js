import {combineReducers} from 'redux';

const testReducer = (state='',action)=>{
    switch(action.type){
        case 'TEST_ACTION':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    testString: testReducer
})