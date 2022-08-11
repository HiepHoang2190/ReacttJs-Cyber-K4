import { Action } from 'history'
import { OPEN_DRAWER, CLOSE_DRAWER, OPEN_FORM_EDIT_PROJECT, SET_SUBMIT_EDIT_PROJECT,OPEN_FORM_CREATE_TASK } from '../constants/Cyberbugs/Cyberbugs'
const initialState = {
  visible: false,
  title: '',
  ComponentContentDrawer: <p>default</p>,
  callBackSubmit: (propsValue) => { alert('click demo!') }
}

export const drawerReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case OPEN_DRAWER:
      return { ...state, visible: true }
    case CLOSE_DRAWER:
      return { ...state, visible: false }
    case OPEN_FORM_EDIT_PROJECT:
      return { ...state, visible: true, ComponentContentDrawer: action.Component, title: action.title }

    case SET_SUBMIT_EDIT_PROJECT: {
      state.callBackSubmit = action.submitFunction;
      return { ...state };
    }
    case OPEN_FORM_CREATE_TASK : {
      state.visible = true
      state.ComponentContentDrawer = action.ComponentContentDrawer
      state.title = action.title
      return {...state}
    }
    default:
      return state
  }
}
