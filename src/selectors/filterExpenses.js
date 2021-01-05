export default ({expenses,filters :{text,startAmount,startDate,endDate,endAmount,sortBy}})=>
    expenses.filter(el=>{
        if(text)
            if(!el.description.toLowerCase().includes(text)&&!el.note.toLowerCase().includes(text)) 
                return false

        if(startAmount && typeof startAmount ==='number')
            if(el.amount<startAmount)
                return false 
    
        if(endAmount && typeof endAmount ==='number')
            if(el.amount>=endAmount)
                return false
        
        if(startDate && typeof startDate ==='number')
            if(el.createdAt<startDate) 
                return false
        
        if(endDate && typeof endDate ==='number')
            if(el.createdAt>=endDate)
                return false
        
        return true           
    }).sort((a,b)=>{
        if(sortBy ==="AMOUNT")
            return b.amount-a.amount
        
        if(sortBy ==="DATE")
            return b.createdAt-a.createdAt
        
        if(sortBy ==="ALPHABETICAL"){
            if(b.description.toLowerCase()<a.description.toLowerCase())
                return 1
            return -1 
        }
    })

