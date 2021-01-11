import React from 'react'
import {shallow} from 'enzyme';

import {ExpenseSummary} from '../../components/ExpenseSummary'; 
import expenseData from '../fixtures/expenses'

test('should render file correctly with expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenseData} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render file correctly with no expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should return 0 if there are no expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[]} />)
    expect(wrapper.find('span').at(0).text()).toBe(' 0 ')
    expect(wrapper.find('span').at(1).text()).toBe(' 0.00 ')
})

test('should return the amount if there is only 1 expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[expenseData[1]]} />)
    expect(wrapper.find('span').at(0).text()).toBe(' 1 ')
    expect(wrapper.find('span').at(1).text()).toBe(' 120.00 ')
})

test('should return add amount if there are multiple expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenseData} />)
    expect(wrapper.find('span').at(0).text()).toBe(' 3 ')
    expect(wrapper.find('span').at(1).text()).toBe(' 870.00 ')
})