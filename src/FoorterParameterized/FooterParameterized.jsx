import React from 'react';
import './FooterParameterized.css';

export default class FooterParameterized extends React.Component {
    render() {
        return <div className="footer">Note de subsol {this.props.titlu}</div>;
    }  
}