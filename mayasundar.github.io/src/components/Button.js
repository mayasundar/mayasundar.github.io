import React from 'react';
import "../index.css";


const Button = ({ label, onClick, isActive }) => (
    <button
        className="button"
        onClick={onClick}
        className={`button ${isActive ? "active" : ""}`}
    >
        {label}
    </button>
);

export default Button;
