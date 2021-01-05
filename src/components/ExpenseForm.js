import React from 'react';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class ExpenseForm extends React.Component{
    state={
        description:this.props.description||"",
        amount:this.props.amount||"",
        note:this.props.note||"",
        createdAt:moment(this.props.createdAt)||moment(Date.now()),
        buttonDisabled :this.props.history.location.pathname.includes('create'),
        showDatePicker:false
    }

    buttonDisabled = (description,amount,createdAt)=>{
        if(!description)
            return this.setState({buttonDisabled:true})
        
        if(!amount||!amount.match(/^\d+((\.)\d{1,2})?$/))
            return this.setState({buttonDisabled:true})
        
        if(!createdAt||typeof createdAt.valueOf()!=='number')
            return this.setState({buttonDisabled:true})

        return this.setState({buttonDisabled:false})
    }

    
    onSubmit = (e)=>{
        e.preventDefault()
        const expense = {
            amount:parseFloat(this.state.amount,10),
            description:this.state.description,
            createdAt:this.state.createdAt.valueOf(),
            note:this.state.note
        }
        this.props.onSubmit(expense,this.props.id)
        this.props.history.push('/');
    }


    render(){
        return(
            <form>
                <input 
                placeholder ="Description"
                autoFocus
                value={this.state.description}
                onChange={e=>{
                    const description=e.target.value;
                    this.setState({description})
                    this.buttonDisabled(description,this.state.amount,this.state.createdAt)
                }}
            />
                <input 
                placeholder ="Amount"
                value={this.state.amount}
                onChange={e=>{
                    const amount=e.target.value;
                    if(amount.match(/^\d*(\.)?(\d{1,2})?$/)){
                        this.setState({amount})
                        this.buttonDisabled(this.state.description,amount,this.state.createdAt)
                    }
                }}
                />

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={createdAt => {this.setState({
                                createdAt:createdAt
                            })
                            this.buttonDisabled(this.state.description,this.state.amount,createdAt)
                        }
                    }                       
                    focused={this.state.showDatePicker}
                    onFocusChange={({focused})=>this.setState({showDatePicker:focused})}
                    numberOfMonths={1}
                    hideKeyboardShortcutsPanel
                    isOutsideRange={()=>false}
                    showClearDate
                    placeholder="DD/MM/YYYY"
                />
                <textarea 
                    placeholder="Note (Optional)"
                    value={this.state.note}
                    onChange={e=>{
                        const note=e.target.value
                        this.setState({note})
                    }}

                ></textarea>
                <button 
                    disabled={this.state.buttonDisabled}
                    onClick={this.onSubmit}
                >
                    {this.props.history.location.pathname.includes('create')?'Add':'Edit'} Expense
                </button>
            </form>
        )

    }
}


export default ExpenseForm