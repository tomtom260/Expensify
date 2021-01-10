import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import {ExpenseFilters} from '../../components/ExpenseFilters'
import {filters,altFilters} from '../fixtures/filters';

test('should render ExpenseFilters correctly',()=>{
    const wrapper = shallow(<ExpenseFilters filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseFilters correctly with alt data',()=>{
    const wrapper = shallow(<ExpenseFilters filters={altFilters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call dispatch with the correct action object when text filter is changed',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('input').at(0).simulate('change',{target:{value:"123abc"}})
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"ADD_TEXT",
        text:"123abc"
    })
})

test('should call dispatch with the correct action object when sortBy is changed',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('select').simulate('change',{target:{value:"AMOUNT"}})
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"SORT_BY",
        sortBy:"AMOUNT"
    })
})

test('should call dispatch with the correct action object when startAmount is changed',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('input').at(1).simulate('change',{target:{value:"123.55"}})
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"SET_START_AMOUNT",
        startAmount:123.55
    })
})

test('should NOT call dispatch startAmount is NOT valid',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('input').at(1).simulate('change',{target:{value:"123.555"}})
    expect(dispatchSpy).toHaveBeenCalledTimes(0)
})
test('should call dispatch with the correct action object when endAmount is changed',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('input').at(2).simulate('change',{target:{value:"123.55"}})
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"SET_END_AMOUNT",
        endAmount:123.55
    })
})

test('should NOT call dispatch endAmount is NOT valid',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('input').at(2).simulate('change',{target:{value:"123.555"}})
    expect(dispatchSpy).toHaveBeenCalledTimes(0)
})

test('should call dispatch with the correct action object when dates are changed',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate:moment(1000),endDate:moment(2000)})
    // expect(dispatchSpy).toHaveBeenNthCalledWith(1,{
    //     type:"SET_START_DATE",
    //     startDate:moment(1000).startOf('day').valueOf()
    // })
    // expect(dispatchSpy).toHaveBeenNthCalledWith(2,{
    //     type:"SET_END_DATE",
    //     endDate:moment(2000).endOf('day').valueOf()
    // })
    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy.mock.calls[0]).toEqual([{
        type:"SET_START_DATE",
        startDate:moment(1000).startOf('day').valueOf()
    }])
    expect(dispatchSpy.mock.calls[1]).toEqual([{
        type:"SET_END_DATE",
        endDate:moment(2000).endOf('day').valueOf()
    }])
})

test('should update state when focus changes',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseFilters dispatch={dispatchSpy} filters={filters} />)
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate')
    expect(wrapper.state('focusedInput')).toBe('startDate')
})


