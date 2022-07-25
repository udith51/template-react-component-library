import React from 'react'
import './InputBox.css'

interface InputBoxProps {
  label: string;
  sizeX: number;
  sizeY: number;
}

const InputBox = (props: InputBoxProps) => {
  return (
    <input placeholder={props.label} width={props.sizeX} height={props.sizeY}></input>
  )
}

export default InputBox