import {createStore,combineReducers} from 'redux' 

import expenseReducer from './reducers/expenses'
import filtersReducer from './reducers/filters'

export default createStore(combineReducers({
        expenses:expenseReducer,
        filters:filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
