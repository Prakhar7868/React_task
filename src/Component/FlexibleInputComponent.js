import React from 'react';
import './FlexibleInputComponent.css';

const FlexibleInputComponent = ({
inputType,
inputValue,
InputTitle,
placeholder,
required,
disabled,
options,
onChange,
})=>{
    const handleChange = (e)=>{
        if (onChange){
            onChange(e.target.value)
        }
    };

    const renderInput = ()=>{
        switch(inputType){
            case 'text':
            return <input type='text' value={inputValue} onChange={handleChange} placeholder={placeholder}/>;
            case 'number':
            return <input type='number' value={inputValue} onChange={handleChange} placeholder={placeholder}/>;
            case 'select':
            return(
                <select value={inputValue} onChange={handleChange}>
                    {options.map((option)=>(
                       <option key={option.value} value={option.value}>
                        {option.label}
                       </option> 
                    ))}

                </select>
            );
            case 'currency':
                return(
                    <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    pattern='^\d*(\.\d{0,2})?$'
                    />
                )
            default:
                return null;
        }
    };

    return(
        <div className='input-container'>
        <label>{InputTitle}</label>
            {renderInput()}
            {required && <span className='required'>*</span>}
        </div>
    )
}
 export default FlexibleInputComponent;