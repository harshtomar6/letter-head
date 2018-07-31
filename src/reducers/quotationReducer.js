import * as actionType from './../actions/actionType';

const initialState = {
  to: 'Some Name\nSome Department\nSome Address',
  body: 'I hereby quoting for some product',
  description: ['Some Product'],
  amount: ['₹  '],
  date: ''
}

export function quotationReducer(state = initialState, action){
  
  switch(action.type){
    case actionType.CHANGE_QUOTATION_TO:
      return {...state, to: action.payload};
    case actionType.CHANGE_QUOTATION_BODY:
      return {...state, body: action.payload};
    case actionType.CHANGE_QUOTATION_DATE:
      return {...state, date: action.payload};
    case actionType.CHANGE_QUOTATION_DESCRIPTION:
      let description = state.description;
      description[action.payload.index] = action.payload.data; 
      return {...state, description: description}
    case actionType.CHANGE_QUOTATION_AMOUNT:
      let amount = state.amount;
      amount[action.payload.index] = action.payload.data;
      return {...state, amount: amount}
    case actionType.ADD_NEW_FIELD:
      let des = state.description;
      let am = state.amount;
      des.push('Some Product');
      am.push('₹  ');
      return {...state, description: des, amount: am}
    default:
      return {...state};
  }
}

const initial = {
  isLoading: false,
  data: [],
  hasErr: false,
  errMsg: '' 
}

export function getQuotations(state = initial, action){
  switch(action.type){
    case actionType.FETCH_QUOTATIONS_REQUEST:
      return {...state, isLoading: true, hasErr: false}
    case actionType.FETCH_QUOTATIONS_SUCCESS:
      return {...state, isLoading: false, data: action.payload, hasErr: false}
    case actionType.FETCH_QUOTATIONS_FAIL:
      return {...state, isLoading: false, data: [], hasErr: true, errMsg: action.payload}
    default:
      return {...state}
  }
}