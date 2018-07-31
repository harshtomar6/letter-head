import * as action from './actionType';
import { SERVER_URI } from './../globals';

export function updateQuotationTo(data){
  return {
    type: action.CHANGE_QUOTATION_TO,
    payload: data
  }
}

export function updateQuotationBody(data){
  return {
    type: action.CHANGE_QUOTATION_BODY,
    payload: data
  }
}

export function addNewField(){
  return {
    type: action.ADD_NEW_FIELD
  }
}

export function updateDescription(index, data){
  return {
    type: action.CHANGE_QUOTATION_DESCRIPTION,
    payload: {
      index: index,
      data: data
    }
  }
}

export function updateDate(data){
  return {
    type: action.CHANGE_QUOTATION_DATE,
    payload: data
  }
}

export function updateAmount(index, data){
  return {
    type: action.CHANGE_QUOTATION_AMOUNT,
    payload: {
      index,
      data
    }
  }
}

export const getQuotations = () => {
  return async dispatch => {
    dispatch({type: action.FETCH_QUOTATIONS_REQUEST});
    let resObj = await fetch(SERVER_URI+'/quotation');
    let res = await resObj.json();

    if(res.err)
      dispatch({
        type: action.FETCH_QUOTATIONS_FAIL,
        payload: res.data
      })
    else
      dispatch({
        type: action.FETCH_QUOTATIONS_SUCCESS,
        payload: res.data
      })
  }
}

export const postQuotation = data => {
  return async dispatch => {
    dispatch({type: action.POST_QUOTATION_REQUEST});
    let resObj = await fetch({
      method: 'post',
      path: SERVER_URI+'/quotation',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let res = await resObj.json();

    if(res.err)
      dispatch({
        type: action.POST_QUOTATION_FAIL,
        payload: res.data
      })
    else
      dispatch({
        type: action.POST_QUOTATION_SUCCESS,
        payload: res.data
      })
  }
}