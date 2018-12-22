import {put, call, takeLatest} from 'redux-saga/effects';
import * as postsActions from './postsActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let postsBaseUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

function* fetchPost(action){
    try{
    
       yield put({type: postsActions.FETCH_POSTS_PENDING});
       let response =  yield call(http.get,`${postsBaseUrl}${action.payload}`);
       
       yield put(postsActions.fetchPostsSuccessAction(response));

    }catch(error){
        yield put({type: postsActions.FETCH_POSTS_ERROR, error});
    }
};

export const postSagas = [
    takeLatest(postsActions.FETCH_POSTS,fetchPost)
];