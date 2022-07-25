import React from 'react'
import './TextArea.css'

interface TextAreaProps {
    label: string,
    cols: number,
    rows: number
}

const TextArea = (props: TextAreaProps) => {
    return (
        <textarea placeholder={props.label} cols={props.cols} rows={props.rows}></textarea>
    )
}

export default TextArea