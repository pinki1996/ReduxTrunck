import {call,takeEvery,put } from 'redux-saga/effects'

import { Add_Users, Fetch_Users } from './redux'
import  Axios  from 'axios'


function getData()
{
    return Axios.get("https://fakestoreapi.com/users")
    .then(function(result)
    {
        return result.data
    })
}

function* callGetData()
{
    const usersData = yield call(getData)
    console.log(usersData)

    yield put   ({type:Add_Users, payload: usersData})
}



 export function* mySaga()
 {
    yield takeEvery(Fetch_Users, callGetData)
 }




//  *--->Generator function -->will be automatically called -->mySaga