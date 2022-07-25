import React from 'react'
import './Select.css'

interface SelectProps {
    options: string[],
    label: string
}

const Select = ({ options, label }: SelectProps) => {
    return (
        <select>
            <option value="" selected disabled>--{label}--</option>
            {options.map(opt => {
                return (
                    <option value={opt} key={opt}>{opt}</option>
                )
            })}
        </select>
    )
}

export default Select;
{/* <option value="uhs" key={ }>--Enter Gender--</option> */ }