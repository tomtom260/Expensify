export const addTextFilter = text=>({
    type:"ADD_TEXT",
    text:text.toLowerCase()
})

export const sortByAmount = ()=>({
    type:"SORT_BY",
    sortBy:"AMOUNT",
})

export const sortByDate = ()=>({
    type:"SORT_BY",
    sortBy:"DATE",
})

export const sortByAlphabeticalOrder = ()=>({
    type:"SORT_BY",
    sortBy:"ALPHABETICAL",
})

export const setStartDate = (startDate)=>{
    startDate===null?startDate=undefined:startDate=startDate.startOf('day').valueOf()
    return {
        type:"SET_START_DATE",
        startDate:startDate
    }
}

export const setEndDate = (endDate)=>{
    endDate===null?endDate=undefined:endDate=endDate.endOf('day').valueOf()
    return {
        type:"SET_END_DATE",
        endDate:endDate
    }
}

export const setStartAmount = (startAmount)=>({
    type:"SET_START_AMOUNT",
    startAmount
})

export const setEndAmount = (endAmount)=>({
    type:"SET_END_AMOUNT",
    endAmount
})

