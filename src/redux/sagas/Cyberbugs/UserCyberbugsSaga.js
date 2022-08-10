import Axios from 'axios';
import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { cyberbugsService } from '../../../services/CyberbugsService';
import { USER_SIGNIN_API, USLOGIN, GET_USER_API, GET_USER_SEARCH } from '../../constants/Cyberbugs/Cyberbugs';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../constants/LoadingConst';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem'
import { push } from 'react-router-redux';
import { history } from '../../../util/history';
import { userService } from '../../../services/UserService';
//Quản lý các action saga

function* signinSaga(action) {
    console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    //Gọi api 
    try {

        const { data, status } = yield call(() => cyberbugsService.signinCyberBugs(action.userLogin));

        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

        yield put({
            type: USLOGIN,
            userLogin: data.content
        })

        console.log(data);

        history.push('/home')

    } catch (err) {
        console.log(err.response.data)
    }


    yield put({
        type: HIDE_LOADING
    })

}


export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}


function* getUserSaga(action) {
    // action.keyword
    console.log(action)
    // Gọi api
    try {
        const { data, status } = yield call(() => userService.getUser(action.keyWord))

        // console.log('data', data)

        yield put({
            type: GET_USER_SEARCH,
            lstUserSearch: data.content
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiGetUser() {
    yield takeLatest(GET_USER_API, getUserSaga);
}



