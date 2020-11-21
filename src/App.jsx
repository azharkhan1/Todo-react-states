import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './Components/Router';
import firebase from './config/firebase';


class App extends Component{
  constructor(){
    super();
    this.state = {
        todos : [{title:'Azhar', edit:false,},{title:"Khan", edit:false,}],
        value : "",
    }
  }
  
  addItem = () =>{
    let obj = {title:this.state.value};
    this.setState({
      todos : [...this.state.todos,obj],
      value : '',
    })
     }
 
   deleteItem = (index) =>{
    this.state.todos.splice(index,1);
    this.setState({
          todos: this.state.todos,
    })
   }
   
   editItem = (item,index)=>{
    this.state.todos[index].edit = true;
    this.setState(
      {
        todos: this.state.todos,
      }
    )
   }
   handleChange = (e,index)=>{
     this.state.todos[index].title = e.target.value;
     this.setState({
       todos:this.state.todos,
     })
   }

   updateValue = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos,
    })
}


  render()
  {
  let  {todos,value}= this.state;
    return(
      <div>
        <input value = {value} onChange={(e)=>this.setState({value:e.target.value})} type="text"/>
        <button onClick={this.addItem}>Add item</button>
        <ul>
           {this.state.todos.map((item,index)=>{

           return <li key={index}>
             
             
             {item.edit ? <input onChange={(e)=>this.handleChange(e,index)} type="text"/> : item.title}

             {item.edit ? <button onClick={()=>this.updateValue(index)}> Update </button>
             
             : <button onClick={(e)=>this.editItem(item,index)}> Edit </button>
            
            }
          
           <button onClick={(e)=>this.deleteItem(index)}> Delete </button>
           </li>

          })}
        </ul>
      </div>
    
    )
  }
}

// class App extends Component{
//   render(){
//     return(
//      <AppRouter/>

//     )
//   }
// }

export default App;
