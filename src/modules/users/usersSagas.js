import {put, call, takeLatest} from 'redux-saga/effects';
import * as usersActions from './usersActions';
import http from '../../utils/http';


//API endpoints for retrieving data
let usersUrl = "https://jsonplaceholder.typicode.com/users";

function* fetchUser(action){
    try{
       yield put({type: usersActions.FETCH_USERS_PENDING});
       
       let response =  yield call(http.get,usersUrl);
       yield put(usersActions.fetchUsersSuccessAction(response));

    }catch(error){
        
        yield put(usersActions.fetchUsersErrorAction(error));
    }
};

export const userSagas = [
    takeLatest(usersActions.FETCH_USERS,fetchUser)
];
