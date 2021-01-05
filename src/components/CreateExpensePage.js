import React from 'react'
import { connect } from 'react-redux';
import { addExpense } from '../action/expenses';
import ExpenseForm from './ExpenseForm';

const CreateExpensePage =(props)=>(
    <div>
        <h1>Create New Expense</h1>
        <ExpenseForm onSubmit={(expense)=>props.dispatch(addExpense(expense))} history={props.history}/>
    </div>
)

export default connect()(CreateExpensePage);