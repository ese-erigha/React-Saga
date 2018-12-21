import {put, call, takeEvery, takeLatest} from 'redux-saga';
import * as postsActions from './postsActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let postsBaseUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

function* fetchPost(action){
    try{

       let response =  yield call(http.get(`${postsBaseUrl}${action.payload}`));
       yield put({type: postsActions.FETCH_POSTS_SUCCESS, response});

    }catch(error){
        yield put({type: postsActions.FETCH_POSTS_ERROR, error});
    }
};


export function fetchPostSaga(){
    yield takeLatest(postsActions.FETCH_POSTS_PENDING,fetchPost);
};