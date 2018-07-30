import React from 'react';
import './letterHead.css';
import om from './../../assets/om.jpg';
import logo from './../../assets/logo.png';

export default class LetterHead extends React.Component {

  constructor(){
    super();
    this.state = {
      date: '',
      dateInput: 'none'
    }
  }

  toggleDateInput = () => {
    this.setState({
      dateInput: this.state.dateInput === 'none' ? 'block':'none'
    })
  }

  render() {
    return (
      <div id="container">

        <div id="row">
          <h5 id="top">GSTIN: 09AAXPT9000E1Z9</h5>
          <img src={om} id="om" />

          <p id="top">Mobile: 8791712467, 8057005783 <br/> E-mail: parthconcrete@gmail.com</p>
	      </div>

        <div id="grid-row">
          <img src={logo} id="logo" />
          <div >
            <h1 id="main">PARTH CONCRETE UDYOG</h1>
            <span id="sub"> Manufacturer's of: </span>
            <h4 id="text">ISI Marked RCC Hume Pipe, Interlocking Tiles, Pillar Post, Manhole Cover etc</h4>
          </div>
	      </div>

        <div id="bottom-wrap">
          <div id="bottom">
            <h4 id="factory">Factory: </h4>
            <h5 id="addr">Vill. Kandhni, Agra Road, <br/> Etawah (U.P.)</h5>
		      </div>
          <div id="rule"></div>
        </div>

        <div id="row">
          <p id="ref">Ref.:</p>
          <div>
            <p id="date" onClick={this.toggleDateInput}>Date: &nbsp;&nbsp;
              {this.state.date.split('-')[2]} - {this.state.date.split('-')[1]} - {this.state.date.split('-')[0]}
            </p>
            <input type="date" value={this.state.date} style={{display: this.state.dateInput}}
              onChange={e => this.setState({date: e.target.value, dateInput: 'none'})}
              onBlur={() => this.setState({dateInput: 'none'})}/>
          </div>
        </div>

      </div>

    );
  }
}