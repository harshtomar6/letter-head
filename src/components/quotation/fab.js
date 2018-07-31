import React from 'react';
import { Link } from 'react-router-dom';

export default class Fab extends React.Component {

  render(){
    const styles = {
      container: {
        position: 'fixed',
        float: 'right',
        right: '20px',
        bottom: '15px'
      },
      btn:{
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '20px',
        borderRadius: '50%',
        padding: '15px 18px',
        margin: '10px',
        bottom: '30px',
        position: 'relative',
        boxShadow: '2px 3px 10px rgba(0,0,0,0.2)'
      }
    }

    return (
      <div style={styles.container}>
        <Link to="/quotation/new" style={styles.btn}>
          <i className="fa fa-pen" style={{fontSize: '20px'}}></i>
        </Link>
      </div>
    );
  }
}