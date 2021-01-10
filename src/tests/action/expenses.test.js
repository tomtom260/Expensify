import {removeExpense,addExpense,editExpense} from '../../action/expenses';

test('should return an action object to remove expense',()=>{
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123abc"
    })
})

test ('should return an action object to add  expense',()=>{
    const action = addExpense({
        amount:500,
        description:"wifi bill",
        createdAt:12
    })
    expect(action).toEqual({
        expense:{
            note:"",
            amount:500,
            description:"wifi bill",
            id: expect.any(String),
            createdAt:12
        },
        type:"ADD_EXPENSE"
    })
})

test ('should return an action object to edit expense',()=>{
    const updates={
        note:"new note",
        id:14
    }
    const action = editExpense('12',updates);
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:'12',
        updates
    })
})