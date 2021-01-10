import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import expenseData from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render ExpenseForm correctly with data',()=>{
    const {description,note,amount,createdAt} = expenseData[0];
    const wrapper = shallow(<ExpenseForm 
        history={{location:{pathname:'edit'}}}
        {...expenseData[0]}
    />);
    expect(wrapper.find('button').props().disabled).toBe(false)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly without no data',()=>{
    const wrapper = shallow(<ExpenseForm history={{location:{pathname:'create'}}}/>);
    expect(wrapper.find('button').props().disabled).toBe(true)
    expect(wrapper).toMatchSnapshot()
})

test('should update state if description is changed',()=>{
    const wrapper = shallow(<ExpenseForm history={{location:{pathname:'create'}}}/>)
    wrapper.find('input').at(0).simulate('change',{target:{value:"123abc"}})
    expect(wrapper.state('description')).toBe("123abc")
})

test('should update state if amount is changed',()=>{
    const wrapper = shallow(<ExpenseForm history={{location:{pathname:'create'}}}/>)
    wrapper.find('input').at(1).simulate('change',{target:{value:"123.45"}})
    expect(wrapper.state('amount')).toBe("123.45")
})

test('should update state if note is changed',()=>{
    const wrapper = shallow(<ExpenseForm history={{location:{pathname:'create'}}}/>)
    wrapper.find('textarea').simulate('change',{target:{value:"123abc"}})
    expect(wrapper.state('note')).toBe("123abc")
})

test('should NOT update state if amount isn\'t valid',()=>{
    const wrapper = shallow(<ExpenseForm history={{location:{pathname:'create'}}}/>)
    const amountBefore = wrapper.state('amount')
    wrapper.find('input').at(1).simulate('change',{target:{value:"123.455"}})
    expect(wrapper.state('amount')).toBe(amountBefore)
})

test('should update state if date is changed',()=>{
    const wrapper = shallow(<ExpenseForm history={{location:{pathname:'create'}}} />)
    wrapper.find('withStyles(SingleDatePicker)').props().onDateChange(moment(0))
    expect(wrapper.state('createdAt')).toEqual(moment(0))
})

test('should update state if focus is changed on SingleDatePicker',()=>{
    const wrapper = shallow(<ExpenseForm history ={{location:{pathname:'/create'}}} />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused:true})
    expect(wrapper.state('showDatePicker')).toBe(true)
})

test('should call submit with the correct arguments when editing',()=>{
    const {description,note,amount,createdAt,id} = expenseData[0];
    const pushSpy = jest.fn();
    const onSubmitSpy = jest.fn();
    const wrapper = shallow (<ExpenseForm
      {...expenseData[0]}            
        history={{
            push:pushSpy, 
            location:{pathname:"/edit"}}}
        onSubmit={onSubmitSpy}
    />)
    wrapper.find('button').simulate('click',{
        preventDefault:()=>{}
    })
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description,
        note,
        createdAt,
        amount
    },id)
    expect(pushSpy).toHaveBeenCalledWith('/')
})

test('should call submit with the correct arguments when creating',()=>{
    const {description,note,amount,createdAt} = expenseData[0];
    const onSubmitSpy = jest.fn();
    const pushSpy = jest.fn();
    const wrapper = shallow (<ExpenseForm
        history={{push:pushSpy,location:{pathname:"/create"}}}
        onSubmit={onSubmitSpy}
    />)
    wrapper.find('input').at(1).simulate('change',{target:{value:`${amount}`}})
    wrapper.find('input').at(0).simulate('change',{target:{value:description}})
    wrapper.find('withStyles(SingleDatePicker)').props().onDateChange(moment(createdAt))
    wrapper.find('button').simulate('click',{
        preventDefault:()=>{}
    })
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description,
        note,
        createdAt,
        amount
    },undefined)
    expect(pushSpy).toHaveBeenCalledWith('/')
})

