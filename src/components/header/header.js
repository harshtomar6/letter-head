import React, { Fragment } from 'react';
import './header.css';

export default class Header extends React.Component {

  handleClick = () => {
    this.props.history.goBack();
  }

  render(){
    const styles = {
      icon: {
        margin: '15px',
        cursor: 'pointer',
        fontSize: '18px'
      }
    }

    return (
      <header>
        {this.props.icon ? 
          <i className="fa fa-arrow-left" style={styles.icon} onClick={this.handleClick}></i> :
          <Fragment />
        }
        <p>{this.props.title}</p>
      </header>
    );
  }

}