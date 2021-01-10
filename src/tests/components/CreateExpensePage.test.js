import React from 'react';
import {shallow} from 'enzyme';
import {v4 as uuid} from 'uuid'

import expenseData from '../fixtures/expenses'
import {CreateExpensePage} from '../../components/CreateExpensePage';

test('should render createExpensePage correctly',()=>{
    const wrapper = shallow(<CreateExpensePage />)
    expect(wrapper).toMatchSnapshot()
})

test('dispatch should be called with the add expense action object',()=>{
    const expense = {
        ...expenseData[0]
    }
    delete expense.id

    const dispatchSpy = jest.fn()
    const wrapper= shallow(<CreateExpensePage dispatch={dispatchSpy}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(dispatchSpy).toHaveBeenCalledWith({
        type:"ADD_EXPENSE",
        expense:{
            description:expenseData[0].description,
            amount:expenseData[0].amount,
            createdAt:expenseData[0].createdAt,
            note:expenseData[0].note,
            id:uuid()
        }
    })
})