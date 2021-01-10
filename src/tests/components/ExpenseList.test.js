import React from 'react';
import {shallow} from 'enzyme';

import {ExpenseList} from '../../components/ExpenseList';
import expensesData from '../fixtures/expenses';

test('should render ExpenseList correctly',()=>{
    const wrapper = shallow(<ExpenseList expenses={expensesData} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList without expenses correctly',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should return a valid action action object to remove expense',()=>{
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ExpenseList expenses={expensesData}  dispatch={dispatchSpy}/>)
    wrapper.find('button').at(1).simulate('click')
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"REMOVE_EXPENSE",
        id:"02"
    })
})

