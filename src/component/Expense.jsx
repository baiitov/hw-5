import React from 'react'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseData from './ExpenseData'
import'./Expense.css'
const Expense = (props) => {
	const [filterYear, setFilterYear] = useState('')
	const filterHandler = (select) => {
		setFilterYear(select)
	}
	const [master, setMaster] = useState([])

	const DaitHandler = (item) => {
		setMaster([...master, { ...item, select: filterYear }])
	}
	console.log(master)
	return (
		<div  className='block'>
			<div className='const'  >
			<ExpenseData onAddChangeHandler={DaitHandler} />
			<ExpensesFilter onFilterHandler={filterHandler} />
			{master.map((el) => (
				<div className='block2'>
					<h1>{el.input}</h1>
					<p>{el.text}</p>
					<h1>{el.select}</h1>
				</div>
			))}
			</div>
		</div>
	)
}

export default Expense
