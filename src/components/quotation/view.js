import React, { Fragment } from 'react';
import Header from './../header/header';
import Fab from './fab';
import { connect } from 'react-redux';
import { getQuotations } from './../../actions/quotation'; 

class View extends React.Component {

  componentDidMount(){
    this.props.getQuotations();
  }

  render(){
    let {quotations} = this.props;
    let content = '';
    
    if(quotations.isLoading)
      content = <i className="fa fa-spinner"></i>
    
    if(quotations.hasErr)
      content = <p>{quotations.errMsg}</p>
    else
      content = quotations.data.map(quot => 
        <li>{quot.date}</li>
      )
    return (
      <Fragment>
        <Header title="Quotation" icon history={this.props.history}/>

        <div style={{paddingTop: '80px'}}>
          {content}
        </div>
        <Fab />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quotations: state.quotationList
})

export default connect(mapStateToProps, {
  getQuotations
})(View);