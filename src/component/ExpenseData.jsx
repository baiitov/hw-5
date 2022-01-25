import React from 'react';
import ExpensesItem from './ExpensesItem';

const ExpenseData = (props) => {
    const SoveHandler=(expenseData)=>{
            const DataWidth = {
                   ...expenseData,
                   select:'',
                   id:Math.random().toString()
                 
            }
      
            props.onAddChangeHandler(DataWidth)

    }
  
    return (
        <div>
            <ExpensesItem onSaveChangeHandler={SoveHandler}/>

        </div>
    );
};

export default ExpenseData;