import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../action/expenses'

const EditExpensePage =(props)=>(
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm onSubmit={(expense,id)=>props.dispatch(editExpense(id,expense))} {...props.expense} history={props.history} />
    </div>
)

const mapPropsFromState = (state,props) =>{
    const expense = state.expenses.find((el)=>el.id===props.match.params.id)
    return{
        expense
    }
}
 
export default connect(mapPropsFromState)(EditExpensePage);