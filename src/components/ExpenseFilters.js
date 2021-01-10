import React from 'react';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import {connect} from 'react-redux'

import { addTextFilter, sortByAlphabeticalOrder, sortByAmount, 
    sortByDate,setEndDate,setStartDate, setStartAmount, setEndAmount } from '../action/filters';
    
export class ExpenseFilters extends React.Component{
    state={
        focusedInput:null
    }
    
    render(){
        return(
            <div>   
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={e=>this.props.dispatch(addTextFilter(e.target.value))}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={e=>{
                        switch(e.target.value){
                            default: 
                            case "DATE":return this.props.dispatch(sortByDate())
                            case "AMOUNT":return this.props.dispatch(sortByAmount())
                            case "ALPHABETICAL": return this.props.dispatch(sortByAlphabeticalOrder())
                        }
        
                    }}
                >
                    <option value="DATE">Date</option>
                    <option value="AMOUNT">Amount</option>
                    <option value="ALPHABETICAL">Alphabetical</option>
                </select>
                    <DateRangePicker
                        startDate={this.props.filters.startDate?moment(this.props.filters.startDate):null}
                        endDate={this.props.filters.endDate?moment(this.props.filters.endDate):null}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput)=>this.setState(()=>({focusedInput}))}
                        onDatesChange={({ startDate, endDate }) =>{
                            this.props.dispatch(setStartDate(startDate))
                            this.props.dispatch(setEndDate(endDate))
                        }}
                        startDateId="your_unique_start_date_id"
                        endDateId="your_unique_end_date_id"
                        numberOfMonths={1}
                        hideKeyboardShortcutsPanel
                        isOutsideRange={()=>false}
                        showClearDates
                    />
                    <input
                        type="text"
                        value={this.props.filters.startAmount||""}
                        onChange={e=>{
                            if(e.target.value.match(/^\d*(\.)?(\d{1,2})?$/))
                                this.props.dispatch(setStartAmount(parseFloat(e.target.value,10)))
                        }}
                        placeholder="Start Amount"
                    />
                    <input
                        type="text"
                        value={this.props.filters.endAmount||""}
                        onChange={e=>{
                            if(e.target.value.match(/^\d*(\.)?(\d{1,2})?$/))
                                this.props.dispatch(setEndAmount(parseFloat(e.target.value,10)))
                        }}
                        placeholder="End Amount"
                    />
            </div>
        )
    }
}


const mapStateToProps= state =>({
    filters:state.filters
})

export default connect(mapStateToProps)(ExpenseFilters);
