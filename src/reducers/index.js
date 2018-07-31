import { combineReducers } from 'redux';
import {quotationReducer, getQuotations} from './quotationReducer';

export default combineReducers({
  quotation: quotationReducer,
  quotationList: getQuotations
});