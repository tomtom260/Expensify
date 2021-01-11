import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import numeral from 'numeral';
import moment from 'moment';

import filterExpenses from '../selectors/filterExpenses'
import { removeExpense } from '../action/expenses';

export const ExpenseList =  props => (
    <div>
        {
            props.expenses.length===0?
                <p>No Expenses</p>:
            (props.expenses.map(el=>{
                return <div key={el.id}>
                    <Link to={`/edit/${el.id}`}>
                        <h2>{el.description}</h2>
                        <p>Amount: {numeral(el.amount).format('0,0.00')} ETB  createdAt: {moment(el.createdAt).format("LL")} </p>
                    </Link>
                    <button onClick={()=>props.dispatch(removeExpense(el.id))}>Remove</button>
                </div>
            }))
        }
    </div>
)


const mapStatetoProps= state =>({
    expenses:filterExpenses(state),
})

export default connect(mapStatetoProps)(ExpenseList);