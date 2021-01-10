import moment from 'moment';

export const filters ={
    text:"",
    sortBy:"DATE",
    startDate:undefined,
    endDate:undefined,
    startAmount:undefined,
    endAmount:undefined,
}

export const altFilters ={
    text:"bill",
    sortBy:"AMOUNT",
    startDate:moment().startOf('month').valueOf(),
    endDate:moment().endOf('month').valueOf(),
    startAmount:150,
    endAmount:1000,
}
