import { combineReducers, createStore } from 'redux';

import {v4 as uuid} from 'uuid'

const addExpense = expense=>({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        note:"",
        createdAt:Date.now(),
        ...expense,
    }

}) 

const removeExpense = id => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpense =(id,updates) => ({
    type:"EDIT_EXPENSE",
    id,
    updates
})

const addTextFilter = text=>({
    type:"ADD_TEXT",
    text:text.toLowerCase()
})

const sortByAmount = ()=>({
    type:"SORT_BY",
    sortBy:"AMOUNT",
})

const sortByDate = ()=>({
    type:"SORT_BY",
    sortBy:"DATE",
})

const sortByAlphabeticalOrder = ()=>({
    type:"SORT_BY",
    sortBy:"ALPHABETICAL",
})

const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate
})

const setEndDate = (endDate)=>({
    type:"SET_END_DATE",
    endDate
})

const setStartAmount = (startAmount)=>({
    type:"SET_START_AMOUNT",
    startAmount
})

const setEndAmount = (endAmount)=>({
    type:"SET_END_AMOUNT",
    endAmount
})

const defaultFilters ={
    text:"",
    sortBy:"DATE",
    startDate:undefined,
    endDate:undefined,
    startAmount:undefined,
    endAmount:undefined,
}

const filtersReducer = (state=defaultFilters,action)=>{
    switch(action.type){
        case "ADD_TEXT":
            return {
                ...state,
                text:action.text
            }

        case "SORT_BY":
            return{
                ...state,
                sortBy:action.sortBy
            }

        case "SET_START_DATE":
            return{
                ...state,
                startDate:action.startDate
            }

        case "SET_END_DATE":
            return{
                ...state,
                endDate:action.endDate
            }

        case "SET_START_AMOUNT":
            return{
                ...state,
                startAmount:action.startAmount
            }

        case "SET_END_AMOUNT":
            return{
                ...state,
                endAmount:action.endAmount
            }

        default:
            return state
    }
}

const expenseReducer = (state= [],action)=>{
    switch (action.type){
        case "ADD_EXPENSE":
            return state.concat(action.expense)

        case "REMOVE_EXPENSE":
            return state.filter(el=>el.id!==action.id)
        
        case "EDIT_EXPENSE":    
            return state.map(el=>{
                if(el.id===action.id){
                    return {
                        ...el,
                        ...action.updates,
                        id:el.id,
                        createdAt:el.createdAt
                    }
                }
                return el
            })
            
            default: return state
    }
}

const store = createStore(combineReducers({
    expenses:expenseReducer,
    filters:filtersReducer
}))

const filterExpenses = ({expenses,filters:{text,startAmount,startDate,endDate,endAmount,sortBy}})=>
    expenses.filter(el=>{
        if(text)
            if(!el.description.toLowerCase().includes(text)&&!el.note.toLowerCase().includes(text)) 
                return false

        if(startAmount && typeof startAmount ==='number')
            if(el.amount<startAmount)
                return false 
    
        if(endAmount && typeof endAmount ==='number')
            if(el.amount>=endAmount)
                return false
        
        if(startDate && typeof startDate ==='number')
            if(el.createdAt<startDate) 
                return false
        
        if(endDate && typeof endDate ==='number')
            if(el.createdAt>=endDate)
                return false
        
        return true           
    }).sort((a,b)=>{
        if(sortBy ==="AMOUNT")
            return b.amount-a.amount
        
        if(sortBy ==="DATE")
            return b.createdAt-a.createdAt
        
        if(sortBy ==="ALPHABETICAL"){
            if(b.description<a.description)
                return 1
            return -1 
        }
    })


store.subscribe(()=>{
    console.log(filterExpenses(store.getState())) 
})


const itemTwo= store.dispatch(addExpense({
    description:"Coffee",
    amount:5
}))

const itemOne = store.dispatch(addExpense({
    description:"Rent",
    note:"Month of January",
    amount:3000
}))


// store.dispatch(removeExpense(itemOne.expense.id))
// store.dispatch(editExpense(itemTwo.expense.id,{
//     amount:"7",
// }))

// store.dispatch(addTextFilter('rent'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
store.dispatch(sortByAlphabeticalOrder())


// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

// store.dispatch(setStartAmount())
// store.dispatch(setStartAmount())

// store.dispatch(setEndAmount(10000))
// store.dispatch(setEndAmount())

console.log(store.getState())