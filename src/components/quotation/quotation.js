import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from './../header/header';

export default class Quotation extends React.Component {

  constructor(){
    super();
    this.state = {
      to: 'Some Name\nSome Department\nSome Address',
      body: 'I hereby quoting for some product',
      description: ['Some Product'],
      amount: ['₹  ']
    }
  }

  renderTables = () => {
    const textareaStyles = {
      fontFamily: 'sans-serif', 
      fontSize:'16px', 
      resize:'none'
    }

    let table = this.state.description.map((cell, i) => 
      <tr>
        <td>

        <textarea style={{...textareaStyles, width:'100%' }}
          value={this.state.description[i]}
          onChange={e => this.handleDescriptionChange(i, e.target.value)}>
          </textarea>
        </td>
        <td>
        <textarea style={{...textareaStyles, width: '100%'}}
          value={this.state.amount[i]} 
          onChange={e => this.handleAmountChange(i, e.target.value)}>
        </textarea>
        </td>
        
      </tr>
    )

    return table;
  }

  handleAmountChange = (index, data) => {
    let a = this.state.amount;

    a[index] = data;
    this.setState({
      amount: a
    });
  }

  handleDescriptionChange = (index,data) => {
    let a = this.state.description;

    a[index] = data;
    this.setState({
      description: a
    })
  }

  handleClick = () => {
    let d = this.state.description;
    let a = this.state.amount;

    d.push('Some great Product');
    a.push('₹ ');

    this.setState({
      description: d,
      amount: a
    });
  }

  handleExport = () => {
    this.props.history.push({
      pathname: "/preview",
      params: {
          to: this.state.to,
          body: this.state.body,
          description: this.state.description,
          amount: this.state.amount
        }
    });
  }

  render() {

    const textareaStyles = {
      fontFamily: 'sans-serif', 
      fontSize:'16px', 
      resize:'none',
      overflow: 'initial',
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
        <Header/>
        
        <div className="content">
          <h4 id="head">QUOTATION</h4><br />
          <p>To,<br/>
            <textarea value={this.state.to} 
              onChange={e => this.setState({to: e.target.value})}
              style={textareaStyles} rows={4}>
            </textarea>
          </p>
          <p>Respected Sir,<br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <textarea style={{...textareaStyles, width: '99%'}} value={this.state.body}
              onChange={e => this.setState({body: e.target.value})}
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
          <button style={btnStyles} onClick={this.handleClick}>
            Add New
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
          
          <Link to={{
            pathname: "/preview",
            params: {
                to: this.state.to,
                body: this.state.body,
                description: this.state.description,
                amount: this.state.amount
              }
            }}
            style={{...btnStyles, 
              width: window.matchMedia('(min-width: 768px)').matches ? 'auto' : '100%',
              textAlign: 'center',
            }}>
          Preview</Link>
        </div>
      </Fragment>
    );
  }
}