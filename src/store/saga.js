import {all} from 'redux-saga/effects';
import {userSagas} from  '../modules/users/usersSagas';
import {postSagas} from '../modules/posts/postsSagas';


export default function* rootSaga(){
   yield all([

    ...userSagas,
    ...postSagas

   ]);
};