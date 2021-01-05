import {v4 as uuid} from 'uuid'
import moment from 'moment'

export const addExpense = expense=>({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        note:"",
        createdAt:moment().valueOf(),
        ...expense,
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
