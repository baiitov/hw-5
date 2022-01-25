// @flow 
import React from 'react';
import './ExpenseFilter.css'



    

export const ExpensesFilter = (props) => {
    const FilterChangeHandler=(event)=>{
   
      props.onFilterHandler(event.target.value)
      
    }
    return (
        <div  >
                  <select className='filter' onChange={FilterChangeHandler} placeholder='область'>
                <option value="bishkek">bishkek</option>
                <option value="batken">batken</option>
                <option value="ysyk-kol">ysyk-kol</option>
                <option value="osh">osh</option>
                <option value="jalal-abad">jalal-abad</option>
                <option value="talas">talas</option>
                <option value="chui">chui</option>
                <option value="naryn">naryn</option>
            </select>
        </div>
    );
};
export default ExpensesFilter