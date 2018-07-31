import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {

  render(){

    const styles = {
      card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        background: this.props.background,
        margin: '10px',
        padding: '40px 10px'
      },
      heading: {
        color: '#fff',
        fontSize: '1.2em'
      }
    }

    return (
      <Link to={this.props.link} style={{textDecoration:'none'}}>
        <div style={styles.card} className="card">
          <h3 style={styles.heading}>{this.props.title}</h3>
        </div>
      </Link>
    );
  }
}

Card.defaultProps = {
  title: 'Some Title',
  link: '/quotation'
}