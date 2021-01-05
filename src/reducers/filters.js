import moment from 'moment'

const defaultFilters ={
    text:"",
    sortBy:"DATE",
    startDate:moment().startOf('month').valueOf(),
    endDate:moment().endOf('month').valueOf(),
    startAmount:undefined,
    endAmount:undefined,
}

export default (state=defaultFilters,action)=>{
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
