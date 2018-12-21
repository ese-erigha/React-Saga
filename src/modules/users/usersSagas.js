import {put, call, takeEvery, takeLatest} from 'redux-saga';
import * as usersActions from './usersActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let usersUrl = "https://jsonplaceholder.typicode.com/users";


function* fetchUser(action){
    try{

       let response =  yield call(http.get(usersUrl));
       yield put({type: usersActions.FETCH_USERS_SUCCESS, response});

    }catch(error){
        yield put({type: usersActions.FETCH_USERS_ERROR, error});
    }
};


export function fetchUserSaga(){
    yield takeLatest(usersActions.FETCH_USERS_PENDING,fetchPost);
};
