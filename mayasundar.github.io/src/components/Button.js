import React from 'react';
import "../index.css";

const buttonStyle = {
    margin: '10px 0',
    width: '300px',
    height: '3.125rem',
    borderRadius: '0.625rem',
    background: 'rgba(255, 255, 255, 0.46)',
    border:'none',
    marginBottom:'-2px',
    fontFamily: 'Amiko',
    color:'#6A788E',
};

const Button = ({ label, onClick }) => (
    <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={onClick}    >
        {label}
    </button>
);

export default Button;
