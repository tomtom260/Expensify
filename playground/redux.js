import {createStore} from 'redux';

const incCount = (incBy=1)=>{
    return {
        type: "INCREMENT",
        incBy
    }
}

const decCount = (decBy=1)=>{
    return {
        type: "DECREMENT",
        decBy
    }
}

const resetCount = ()=>{
    return {
        type: "RESET"
    }
}

const setCount = (count)=>{
    return {
        type: "SET",
        count
    }
}


const store = createStore((state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
            return{
                count:state.count+action.incBy
            }

        case "DECREMENT":
            return{
                count:state.count-action.decBy
            }

        case "RESET":
            return{
                count:0
            }

        case "SET":
            return{
                count:action.count
            }
        default :
            return state    

    }
})


store.dispatch(incCount(5))
store.dispatch(decCount())
store.dispatch(setCount(40))
// store.dispatch(decCount())

console.log(store.getState())