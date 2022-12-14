import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugsService";
import { projectService } from "../../../services/ProjectService"
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
import { GET_LIST_PROJECT_SAGA, GET_LIST_PROJECT, UPDATE_PROJECT_SAGA, CLOSE_DRAWER, DELETE_PROJECT_SAGA,GET_PROJECT_DETAIL,PUT_PROJECT_DETAIL } from "../../constants/Cyberbugs/Cyberbugs";
import { history } from '../../../util/history';
import { notifiFunction } from "../../../util/Notification/notificationCyberbugs";

function* createProjectSaga(action) {

    console.log('actionCreateProject', action)
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberbugsService.createProjectAuthorization(action.newProject));



        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            history.push('/projectmanagement');
        }


    } catch (err) {
        console.log(err);
    }

    yield put({
        type: HIDE_LOADING
    })
}





export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga);
}


//Saga dùng để get all project từ api 


function* getListProjectSaga(action) {

    try {
        const { data, status } = yield call(() => cyberbugsService.getListProject());

        //Sau khi lấy dữ liệu từ api về thành công
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_LIST_PROJECT,
                projectList: data.content
            })
        }
    } catch (err) {
        console.log(err)
    }

}


export function* theoDoiGetListProjectSaga() {
    yield takeLatest(GET_LIST_PROJECT_SAGA, getListProjectSaga);
}

//UpdateProject
function* updateProjectSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    try {


        const { data, status } = yield call(() => cyberbugsService.updateProject(action.prjectUpdate));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            history.push('/projectmanagement');
        }
        // yield put({
        //     type: GET_LIST_PROJECT_SAGA
        // })
        yield call(getListProjectSaga);
        yield put({
            type: CLOSE_DRAWER
        })
    } catch (err) {
        console.log(err);
    }

    yield put({
        type: HIDE_LOADING
    })
}


export function* theoDoiUpdateProjectSaga() {
    yield takeLatest(UPDATE_PROJECT_SAGA, updateProjectSaga);
}

//Delete Project
function* deleteProjectSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    try {
        const { data, status } = yield call(() => projectService.deleteProject(action.idProject));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            notifiFunction('success', 'Delete project successfully !')

            // history.push('/projectmanagement');
        } else {
            notifiFunction('error', 'Delete project fail !')
        }
        // yield put({
        //     type:'GET_LIST_PROJECT_SAGA'
        // })
        yield call(getListProjectSaga);
        yield put({
            type: 'CLOSE_DRAWER'
        })
    } catch (err) {
        notifiFunction('error', 'Delete project fail !')
        console.log(err);
    }

    yield put({
        type: HIDE_LOADING
    })
}


export function* theoDoiDeleteProject() {
    yield takeLatest(DELETE_PROJECT_SAGA, deleteProjectSaga);
}

// Get Project Detail
function* getProjectDetailSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);

    try {
        const { data, status } = yield call(() => projectService.getProjectDetail(action.projectId));
        
        console.log('data',data);
        //Lấy dữ liệu thành công thì đưa dữ liệu lên redux
        yield put({
            type:PUT_PROJECT_DETAIL,
            projectDetail:data.content
        })
    
    } catch (err) {
        console.log('404 not found !')
        history.push('/projectmanagement');
    }
   
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiGetProjectDetail() {
    yield takeLatest(GET_PROJECT_DETAIL, getProjectDetailSaga);
}