import React from 'react';
import ExpenseFilters from './ExpenseFilters'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary';

export default ()=>(
    <div>
        <ExpenseSummary/>
        <ExpenseFilters />
        <ExpenseList  />  
    </div>
)
