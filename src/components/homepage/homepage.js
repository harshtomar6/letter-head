import React, { Fragment} from 'react';
import Card from './card';
import Header from './../header/header';
import './homepage.css';

export default class Homepage extends React.Component {

  render(){

    const styles = {
      grid:{
        display: 'flex',  
        flexWrap: 'wrap'
      }
    }

    return (
      <Fragment>
        <Header title="Home"/>

        <div style={{paddingTop: '80px'}}>
          <div style={styles.grid}>
            <div className="col">
              <Card title="Quotation" background="linear-gradient(to right, #4568dc, #b06ab3)"
                link="/quotation"/>
            </div>
            <div className="col">
              <Card title="Letter" background="linear-gradient(to right, #43c6ac, #191654)"
                link="/letter"/>
            </div>
            <div className="col">
              <Card title="Empty Letter" link=".empty-letter" 
                background="linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)" />
            </div>
          </div>    
        </div>
      </Fragment>
    );
  }
}