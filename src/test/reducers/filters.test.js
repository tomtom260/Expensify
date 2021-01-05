import moment from 'moment';

import filtersReducer from '../../reducers/filters';

const defaultFilters ={
    text:"",
    sortBy:"DATE",
    startDate:moment().startOf('month').valueOf(),
    endDate:moment().endOf('month').valueOf(),
    startAmount:undefined,
    endAmount:undefined,
}

test('should add default state to store',()=>{   
    const state = filtersReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual(defaultFilters)
})

test('should add text filter to store',()=>{
    const state= filtersReducer(defaultFilters,{
        type:"ADD_TEXT",
        text:"abc123"
    })
    expect(state.text).toBe('abc123')
})

test('should add sortBy filter to store',()=>{
    const state = filtersReducer(defaultFilters,{
        type:"SORT_BY",
        sortBy:"AMOUNT"
    })
    expect(state.sortBy).toBe("AMOUNT")
})

test('should add startDate filter to store',()=>{
    const state = filtersReducer(defaultFilters,{
        type:"SET_START_DATE",
        startDate:1809749089560
    })
    expect(state.startDate).toBe(1809749089560)
})

test('should add endDate filter to store',()=>{
    const state = filtersReducer(defaultFilters,{
        type:"SET_END_DATE",
        endDate:1809749089560
    })
    expect(state.endDate).toBe(1809749089560)
})

test('should add startAmount filter to store',()=>{
    const state = filtersReducer(defaultFilters,{
        type:"SET_START_AMOUNT",
        startAmount:2000
    })
    expect(state.startAmount).toBe(2000)
})

test('should add endAmount filter to store',()=>{
    const state = filtersReducer(defaultFilters,{
        type:"SET_END_AMOUNT",
        endAmount:2000
    })
    expect(state.endAmount).toBe(2000)

})