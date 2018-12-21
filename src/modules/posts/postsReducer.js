import * as postsActions from './postsActions';
import initialState from '../../shared/models/initialState';
import createReducer from '../../utils/reducer-enhancer';

function fetchPostsPending(state, action){
    return {...state, loading: true };
}

function fetchPostsSuccess(state, action){
   return Object.assign({},state, {loading: false}, {posts: action.payload});
}

function fetchPostsError(state, action){
    return Object.assign({},state, {loading: false}, {error: action.payload});
}

//Update the application state based on the given action.
const postsReducer = createReducer(initialState, {
    [postsActions.FETCH_POSTS_PENDING] : fetchPostsPending,
    [postsActions.FETCH_POSTS_SUCCESS] : fetchPostsSuccess,
    [postsActions.FETCH_POSTS_ERROR]   :  fetchPostsError
});

export default postsReducer;
