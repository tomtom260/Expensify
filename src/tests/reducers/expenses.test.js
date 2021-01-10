import moment from 'moment';

import expenseReducer from '../../reducers/expenses';
import expensesData from '../fixtures/expenses'

test('should set default state correctly',()=>{
    const state = expenseReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual([])
})


test('should remove the expense with the same id',()=>{
    const state = expenseReducer(expensesData,{
        type:"REMOVE_EXPENSE",
        id:"01"
    })
    expect(state).toEqual([expensesData[1],expensesData[2]])
})

test('should not remove the expense if there is no id',()=>{
    const state = expenseReducer(expensesData,{
        type:"REMOVE_EXPENSE"
    })
    expect(state).toEqual(expensesData)
})

test('should add en expense',()=>{
    const action = {
        type:"ADD_EXPENSE",
        expense:{
            description:"electricity bill",
            amount:"350",
            note:"",
            createdAt:moment().valueOf(),
            id:'04'
        }
    }
    const state = expenseReducer(expensesData,action)
    expect(state).toEqual([...expensesData,action.expense])
})

test('should edit an expense with the same id',()=>{
    const action = {
        type:"EDIT_EXPENSE",
        id:"02",
        updates:{
            note:"Month of January",
            amount:150,
            id:"03"
        }
    }
    const state = expenseReducer(expensesData,action)
    expect(state[1]).toEqual({
        ...expensesData[1],
        note:"Month of January",
        amount:150,
    })
})

test('should NOT edit an expense with NO id',()=>{
    const action = {
        type:"EDIT_EXPENSE",
        updates:{
            note:"Month of January",
            amount:150,
            id:"03"
        }
    }
    const state = expenseReducer(expensesData,action)
    expect(state).toEqual(expensesData)
})
