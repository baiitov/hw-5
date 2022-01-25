import React, { useState } from 'react';
import "./ExpensesItem.css"
const ExpensesItem = (props) => {
    const [input, setInput]= useState('')
    const [text, setText] = useState('')

      const snowonsHandler=(event)=>{
        const  currentInput = event.target.value
        if (currentInput==='input') {
            setInput(event.target.value)
        }else if (currentInput ==='text'){
           setText(event.target.value)
        }
    
      }
      
const inputHandler =(event)=>{
    setInput(
    
     event.target.value
    )
  
 }
 
 const textHandler =(event)=>{
     setText(
        
         event.target.value
     )
    
 }
        
    


   const submitHandler=(event)=>{
       event.preventDefault()
     const DataHandler={
         input,
         text,
     };
        props.onSaveChangeHandler(DataHandler)
   }
   
    return (
        <div>
            <form   onSubmit={submitHandler}>
            <div>
            <div>
                <input onChange={inputHandler} name='input' type="text" className='input__text' placeholder='name' />
            </div>
      
            <textarea onChange={textHandler} name='text' placeholder='озун жонундо кыскача' className='text__area'>
           
            </textarea>
            <button className='btn' >отправит</button>    
     
           </div>
        </form>

        </div>    );
};

export default ExpensesItem;