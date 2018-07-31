import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from './../header/header';
import { connect } from 'react-redux';
import { updateQuotationTo, updateQuotationBody,
  addNewField, updateDescription, updateAmount,
  updateDate } from './../../actions/quotation';

class Quotation extends React.Component {

  renderTables = () => {
    const textareaStyles = {
      fontFamily: 'sans-serif', 
      fontSize:'16px', 
      resize:'none'
    }

    let { description, amount } = this.props.quotation; 

    let table = description.map((cell, i) => 
      <tr>
        <td>

        <textarea style={{...textareaStyles, width:'100%' }}
          value={description[i]}
          onChange={e => {this.props.updateDescription(i, e.target.value)}}>
          </textarea>
        </td>
        <td>
        <textarea style={{...textareaStyles, width: '100%'}}
          value={amount[i]} 
          onChange={e => this.props.updateAmount(i, e.target.value)}>
        </textarea>
        </td>
        
      </tr>
    )

    return table;
  }

  render() {

    const textareaStyles = {
      fontFamily: 'sans-serif', 
      fontSize:'16px', 
      resize:'none',
      overflow: 'initial'
    }

    const btnStyles = {
      position: 'relative',
      float: 'right',
      margin: '10px',
      padding: '10px 15px',
      background: '#007bff',
      color: '#fff',
      border: '1px solid #007bff',
      borderRadius: '2px',
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '14px'
    }

    const footerStyles = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'flex-end'
    }

    return (
      <Fragment>
        <Header title="New Quotation" icon history={this.props.history}/>

        <div className="content" style={{paddingTop: '105px'}}>
          <input type="date" value={this.props.quotation.date}
            onChange={e => {this.props.updateDate(e.target.value)}}/>

          <h4 id="head">QUOTATION</h4><br />
          <p>To,<br/>
            <textarea value={this.props.quotation.to} 
              onChange={e => {this.props.updateQuotationTo(e.target.value)}}
              style={textareaStyles} rows={4}>
            </textarea>
          </p>
          <p>Respected Sir,<br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <textarea style={{...textareaStyles, width: '99%'}} value={this.props.quotation.body}
              onChange={e => {this.props.updateQuotationBody(e.target.value)}}
              rows={1}>
            </textarea>
            <br />
            <br />
          </p>

          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTables()}
            </tbody>
          </table>
          <button style={btnStyles} onClick={() => {this.props.addNewField()}}>
            <i className="fa fa-plus"></i> &nbsp;Add New
          </button>

          <p>
            <br />
            Please refer to the terms and conditions below.
		</p>

        </div>

        <footer id="footer">
          <div id="terms">
            <p><em>Terms & Conditions: </em></p>
            <ol>
              <li>The above Rates are Ex-Factory. </li>
              <li>Additional GST will be charged at 18%.</li>
              <li>Additional Freight Charges will be charged as follows - <br />
                &nbsp;&nbsp;@15% upto 50 km.<br />
                &nbsp;&nbsp;@18% upto 100 km.<br />
                &nbsp;&nbsp;@20% above 100 km. </li>

            </ol>
          </div>

        </footer>

        <div style={footerStyles} class="footertab">
          
          <Link to="/preview"
            style={{...btnStyles, 
              width: window.matchMedia('(min-width: 768px)').matches ? 'auto' : '100%',
              textAlign: 'center',
            }}>
          <i className="far fa-eye"></i>&nbsp;&nbsp;
          Preview</Link>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quotation: state.quotation
});

export default connect(mapStateToProps, {
  updateQuotationTo,
  updateQuotationBody,
  addNewField,
  updateDescription,
  updateAmount,
  updateDate
})(Quotation);