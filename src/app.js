import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './configureStore';
import AppRouter from './routers/AppRouter';
import {addExpense} from './action/expenses';

import './styles/styles.scss';

// const store = configureStore()
// console.log(configureStore)

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>,document.querySelector('#root'))

store.dispatch(addExpense({
    description:"wifi bill",
    amount:500,
}))

store.dispatch(addExpense({
    description:"phone bill",
    amount:250,
}))

store.dispatch(addExpense({
    description:"water bill",
    amount:120,
}))















// const app ={
//     title:"Indecision",
//     subtitle:"put your life at the hands of a computer",
//     options: []
// }



// const addOption = (e)=>{
//     e.preventDefault();
//     if(e.target.elements.option.value ===''){
//         return
//     }
    
//     app.options.push(e.target.elements.option.value);
//     e.target.elements.option.value="";
//     renderApp()
// }

// const renderList = ()=> app.options.map((el)=> <li key={el}>{el}</li>)  

// const removeAll = () =>{
//     app.options=[]
//     renderApp()
// }

// const makeDecision = ()=>{
//     const random = Math.floor(Math.random()*app.options.length)
//     alert(app.options[random])
// }

// // const renderApp = ()=>{
// //     let template =(
// //         <div>
// //             <h1>{app.title}</h1>
// //             <p>{app.subtitle&&app.subtitle}</p>
// //             <p>{app.options.length>0?'Here are your options:':'no options'}</p>
// //             <button disabled={app.options.length===0} onClick={makeDecision}>what should i do?</button>
// //             <ul>
// //                 {renderList()}
// //             </ul>
// //             <form onSubmit = {addOption}>
// //                 <input name="option" />
// //                 <button>Add Option</button>
// //                 <button onClick={removeAll}>Remove All</button>
// //             </form>

            
// //         </div>
// //     )
// //     ReactDOM.render(template,document.querySelector('#root'))
// // }
// // renderApp()


// class VisibilityToggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             showDetail:true
//         }
//     }
    
//     render(){
//         return(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={this.toggle.bind(this)}>{this.state.showDetail?"Hide Detail":'show Detail'}</button>
//             {this.state.showDetail&&<p>this is the detail</p>}
//         </div>)
//     }

//     toggle (){
//             this.setState(prevState=> {
//                 return {
//                 showDetail: !(prevState.showDetail)
//             }
//         })
//     }
    
// }

// ReactDOM.render(<VisibilityToggle />,document.querySelector('#root'))

// renderApp()
// let count = 0;
// const addOne = () =>{
//     console.log('add one')
//     count++;
// }
// const minusOne = () =>{
//     console.log('minus one')
//     count--;
// }
// const reset = () =>{
//     console.log('count set to 0')
//     count=0;
// }
// const templateTwo = 
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
