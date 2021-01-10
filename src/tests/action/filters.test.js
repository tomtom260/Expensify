import * as filters from '../../action/filters'
import moment from 'moment';

test ('should return an action object to add text filter',()=>{
    const text = '123abc'
    const action = filters.addTextFilter(text);
    expect(action).toEqual({
        type:"ADD_TEXT",
        text
    })
})

test ('should return an action object to sort by alphabetical order',()=>{
    const action = filters.sortByAlphabeticalOrder();
    expect(action).toEqual({
        type:"SORT_BY",
        sortBy:"ALPHABETICAL",
    })
})

test ('should return an action object to sort by amount',()=>{
    const action = filters.sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY",
        sortBy:"AMOUNT",
    })
})

test ('should return an action object to sort by alphabetical order',()=> {
    const action = filters.sortByDate();
    expect(action).toEqual({
        type:"SORT_BY",
        sortBy:"DATE",
    })
})

test ('should return an object to set startDate filter',()=>{
    const action = filters.setStartDate(moment())
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment().startOf('day').valueOf()
    })
})

test ('should return an object to set endDate filter',()=>{
    const action = filters.setEndDate(moment())
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment().endOf('day').valueOf()
    })
})

test ('should return an object to set startAmount filter',()=>{
    const action = filters.setStartAmount(1000);
    expect(action).toEqual({
        type:"SET_START_AMOUNT",
        startAmount:1000
    })
})

test ('should return an object to set endAmount filter',()=>{
    const action = filters.setEndAmount(1000);
    expect(action).toEqual({
        type:"SET_END_AMOUNT",
        endAmount:1000
    })
})