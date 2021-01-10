import React from 'react';
import {shallow} from 'enzyme';

import expenseData from '../fixtures/expenses'
import {EditExpensePage} from '../../components/EditExpensePage';

test('should render editExpensePage correctly',()=>{
    const wrapper = shallow(<EditExpensePage />)
    expect(wrapper).toMatchSnapshot()
})

test('dispatch should be called with the edit expense action object',()=>{
    const expense = {
        ...expenseData[0]
    }
    delete expense.id

    const dispatchSpy = jest.fn()
    const wrapper= shallow(<EditExpensePage dispatch={dispatchSpy}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expense,"05");
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"EDIT_EXPENSE",
        id:"05",
        updates:expense
        }
    )
})

test('dispatch should be called with the remove expense action object',()=>{
    const dispatchSpy = jest.fn()
    const wrapper= shallow(<EditExpensePage match={{params:{id:"07"}}} dispatch={dispatchSpy}/>)
    wrapper.find('button').simulate('click');
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"REMOVE_EXPENSE",
        id:"07",
        }
    )
})