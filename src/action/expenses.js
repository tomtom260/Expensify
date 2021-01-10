import {v4 as uuid} from 'uuid'

export const addExpense = expense=>({
    type:"ADD_EXPENSE",
    expense:{
        note:"",
        ...expense,
        id:uuid()
    }

}) 

export const removeExpense = id => ({
    type: "REMOVE_EXPENSE",
    id
})

export const editExpense =(id,updates) => ({
    type:"EDIT_EXPENSE",
    id,
    updates
})
