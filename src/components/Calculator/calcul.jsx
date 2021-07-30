import React, {useState} from 'react'
import './calc.css'

export const Calculator = () => {

    const [inputValue1, setInputValue1] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);
    const [result, setResult] = useState(0)


    let inputHandler = (e) => {
     if (e.target.name == 'inputValue1'){
        setInputValue1(e.target.value) 
     } else {
         setInputValue2(e.target.value)
     }
    }


const onPlus = () => {
    setResult (parseInt(inputValue1) + parseInt(inputValue2))
};
const onMinus = () => {
    setResult (parseInt(inputValue1) - parseInt(inputValue2))
}
const onDivice = () => {
    setResult (parseInt(inputValue1) / parseInt(inputValue2))
}
const onMult = () => {
    setResult (parseInt(inputValue1) * parseInt(inputValue2))
}



    return (
    <div>
        <h3 className='h3'>Calculator</h3>
        <hr />
        <input name='inputValue1' value={inputValue1} onChange={inputHandler} type='number'></input>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
        <button onClick={onDivice}>/</button>
        <button onClick={onMult}>*</button>
        <input name='inputValue2'  value={inputValue2} onChange ={inputHandler} type='number'></input>
        <hr />
        <div className='res'>
            result: {result}
        </div>
        {/* <hr />
        <h4>Simple counter</h4>
        <div>result:{count} </div><button onClick={() => {setCount(count + 1)}} value={count}>+</button> 
        <button onClick={() => {setCount(count - 1)}}>-</button> */}
    </div>
    )
}