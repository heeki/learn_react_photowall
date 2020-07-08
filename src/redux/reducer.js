import init from '../data/posts';
import {combineReducers} from 'redux';

function posts(state = init, action) {
    switch (action.type) {
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index+1)];
        case 'ADD_POST':
            return [...state, action.post];
        default:
            return state;
    }
}

function comments(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.pid]) {
                return {...state, [action.pid]: [action.comment]};
            } else {
                return {...state, [action.pid]: [...state[action.pid], action.comment]};
            }
            
        default:
            return state;
    }
}

// note that all reducer functions are called
// switch statement is what ensures that only the specific action is taken
const rootReducer = combineReducers({posts, comments});

export default rootReducer;