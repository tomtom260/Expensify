import React from 'react';
import ExpenseFilters from './ExpenseFilters'
import ExpenseList from './ExpenseList'

export default ()=>(
    <div>
        <h1>Expenses</h1>
        <ExpenseFilters />
        <ExpenseList  />  
    </div>
)
