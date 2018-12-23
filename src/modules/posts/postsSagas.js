import {put, call, takeLatest} from 'redux-saga/effects';
import * as postsActions from './postsActions';
import {getPosts} from '../../shared/services/httpService';

//API endpoints for retrieving data
let postsBaseUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

function* fetchPost(action){
    try{
    
       yield put({type: postsActions.FETCH_POSTS_PENDING});
       let response =  yield call(getPosts,`${postsBaseUrl}`, { userId: action.payload});
       
       yield put(postsActions.fetchPostsSuccessAction(response));

    }catch(error){
        yield put({type: postsActions.FETCH_POSTS_ERROR, error});
    }
};

export const postSagas = [
    takeLatest(postsActions.FETCH_POSTS,fetchPost)
];