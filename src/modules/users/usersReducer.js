import * as usersActions from './usersActions';
import initialState from '../../shared/models/initialState';
import createReducer from '../../utils/reducer-enhancer';

function fetchUsersPending(state, action){
    return {...state, loading: true };
};

function fetchUsersSuccess(state, action){
    return Object.assign({},state, {loading: false}, {users: action.payload});
};

function fetchUsersError(state,action){
    return Object.assign({},state, {loading: false}, {error: action.payload});
};

//Update the application state based on the given action.
const usersReducer = createReducer(initialState,{
    [usersActions.FETCH_USERS_PENDING] : fetchUsersPending,
    [usersActions.FETCH_USERS_SUCCESS] : fetchUsersSuccess,
    [usersActions.FETCH_USERS_ERROR]   : fetchUsersError
});

export default usersReducer;
