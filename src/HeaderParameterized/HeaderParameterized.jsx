import React from 'react';
import './HeaderParameterized.css';

export default function HeaderParameterized(props) {
    return <div className="header">Introducere in <span className="value">{props.value ?? "React"}</span></div>;
}