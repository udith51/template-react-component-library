import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import './Button.css';
enum ButtonTypes {
    "button",
    "submit",
    "reset",
    undefined
}

interface ButtonProps {
    label: string;
    type: "submit";
}

const Button = (props: ButtonProps) => {
    return (
        <button type={props.type}>{props.label}</button>
    )
}

export default Button;