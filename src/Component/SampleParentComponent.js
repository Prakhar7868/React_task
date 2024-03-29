import React,{useState} from 'react';
import FlexibleInputComponent from './FlexibleInputComponent';
import './SampleParentComponent.css';

const SampleParentComponent =()=>{
const [name, setName] = useState('')
const [age, setAge] = useState('')
const [country, setCountry] = useState('')
const [price, setPrice] = useState('')

const handleNameChange = (value)=>{
    setName(value);
}
const handleAgeChange = (value)=>{
    setAge(value);
}
const handleCountryChange = (value)=>{
    setCountry(value);
}
const handlePriceChange = (value)=>{
    setPrice(value);
}
    return(
        <div className='parent-container'>
            <h2>Sample parent Component</h2>
            <FlexibleInputComponent
            inputType="text"
            inputValue={name}
            InputTitle="Name"
            placeholder="Enter your name"
            required={true}
            disabled={false}
            onChange={handleNameChange}
            />
            <FlexibleInputComponent
            inputType="number"
            inputValue={age}
            inputTitle="Age"
            placeholder="Enter your age"
            required={true}
            disabled={false}
            onChange={handleAgeChange}
            />
            <FlexibleInputComponent
                inputType="select"
                inputValue={country}
                inputTitle="Country"
                placeholder="select your country"
                required={true}
                disabled={false}
                options={[
                    {value: 'usa', label: 'USA'},
                    {value: 'uk', label: 'UK'},
                    {value: 'canada', label: 'Canada'},
                ]}
                onChange={handleCountryChange}
            />
                        <FlexibleInputComponent
                inputType="currency"
                inputValue={price}
                inputTitle="Price"
                placeholder="Enter Price"
                required={true}
                disabled={false}
                onChange={handlePriceChange}
            />
        </div>

    )

}

export default SampleParentComponent;