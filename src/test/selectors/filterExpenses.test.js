import filterExpenses from '../../selectors/filterExpenses';
import expensesData from '../fixtures/expenses'

const filters = {
    text:"",
    sortBy:"DATE",
    startDate:undefined,
    endDate:undefined,
    startAmount:undefined,
    endAmount:undefined,
}



test("should filter expenses using text",()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,text:"wifi"}})
    expect(expenses).toEqual([expensesData[2]])
}) 

test('should sort expenses by date',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,sortBy:"DATE"}});
    expect(expenses).toEqual([expensesData[1],expensesData[2],expensesData[0]])
})

test('should sort expenses by amount',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,sortBy:"AMOUNT"}});
    expect(expenses).toEqual([expensesData[2],expensesData[0],expensesData[1]])
})

test('should sort expenses by alphabeticalorder',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,sortBy:"ALPHABETICAL"}});
    expect(expenses).toEqual(expensesData)
})

test('should filter expenses by a startDate',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,startDate:1650000000000}})
    expect(expenses).toEqual([expensesData[1],expensesData[2]])
})

test('should filter expenses by an endDate',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,endDate:1650000000000}})
    expect(expenses).toEqual([expensesData[0]])
})

test('should filter expenses by a startAmount',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,startAmount:200}})
    expect(expenses).toEqual([expensesData[2],expensesData[0]])
})

test('should filter expenses by an endAmount',()=>{
    const expenses = filterExpenses({expenses:expensesData,filters:{...filters,endAmount:200}})
    expect(expenses).toEqual([expensesData[1]])
})

