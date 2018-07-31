import React, { Fragment } from 'react';
import LetterHead from './../letterHead/letterHead';
import { connect } from 'react-redux';
import { postQuotation } from './../../actions/quotation';

class Preview extends React.Component {

  constructor(){
    super();
    this.state = {
      display: 'block'
    }
  }

  renderNewLineCharacters = (str) => {
    return str.split('\n').map(s => 
      <Fragment>
        {s}
        <br/>
      </Fragment>
    )
  }

  renderTable = () => {
    let {description, amount} = this.props.quotation;

    let table = description.map((cell, index) => 
      <tr>
        <td>{cell}</td>
        <td>{amount[index]} </td>
      </tr>
    );

    return table;
  }

  handlePrint = () => {
    this.props.postQuotation({
      to: this.props.quotation.to,
      body: this.props.quotation.body,
      date: this.props.quotation.date,
      description: this.props.quotation.description,
      amount: this.props.quotation.amount
    });
    this.setState({display: 'none'}, () => {
      window.print();
      this.setState({display: 'block'})
    })
  }

  render(){
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
    }

    const footerStyles = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'flex-end',
      display: this.state.display
    }
    const params = this.props.quotation;
    return (
      <Fragment>
        <div id="preview">
        <LetterHead />
        <div class="content">
          <h4 id="head">QUOTATION</h4><br />
          <p>To,<br/>
            {this.renderNewLineCharacters(params.to)}
          </p>
          <p>Respected Sir,<br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {this.renderNewLineCharacters(params.body)}
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
              {this.renderTable()}
            </tbody>
          </table>

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
        </div>

        <div style={footerStyles} >
          
          <button style={{...btnStyles, 
              width: window.matchMedia('(min-width: 768px)').matches ? 'auto' : '100%',
            }} 
            onClick={this.handlePrint}>
            Export as PDF
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quotation: state.quotation
})

export default connect(mapStateToProps, {
  postQuotation
})(Preview);