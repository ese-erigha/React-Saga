import {put, call, takeLatest} from 'redux-saga/effects';
import * as usersActions from './usersActions';
import {getUsers} from '../../shared/services/httpService';


//API endpoints for retrieving data
let usersUrl = "https://jsonplaceholder.typicode.com/users";

function* fetchUser(action){
    try{
       yield put({type: usersActions.FETCH_USERS_PENDING});
       
       let response =  yield call(getUsers,usersUrl);
       yield put(usersActions.fetchUsersSuccessAction(response));

    }catch(error){
        
        yield put(usersActions.fetchUsersErrorAction(error));
    }
};

export const userSagas = [
    takeLatest(usersActions.FETCH_USERS,fetchUser)
];
