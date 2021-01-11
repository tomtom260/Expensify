import React from 'react'
import {connect} from 'react-redux';
import numeral from 'numeral';

import filterExpenses from '../selectors/filterExpenses'

const calculateTotal = (expense)=>expense.reduce((acc,cur)=>acc+cur.amount,0)

export const ExpenseSummary = props=>(
    <div>
        <h1>
            Viewing
            <span className="TotalExpense__numberOfExpenses"> {props.expenses.length} </span>
            Expense{props.expenses.length?'s':""} totalling
            <span className="TotalExpense__totalExpense"> {numeral(calculateTotal(props.expenses)).format('0,0.00')} </span>
            Birr.
        </h1>
    </div>
)

const mapStateToProps = (state)=>({
    expenses:filterExpenses(state)
})

export default connect(mapStateToProps)(ExpenseSummary);

