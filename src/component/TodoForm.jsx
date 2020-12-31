import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../Redux/actionTypes';

function TodoForm() {
const [input, setInput] = useState();



  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({ id: Math.random(), isComplete: false,isEdit:false, text: input }));
    setInput("");
  };



  const handleChange = e => {
    setInput(e.target.value);
  };

   
  return (
    <div  className='todo-form'>
      
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
          
          />
          <button  className='todo-button' onClick={add}>
            Add todo
          </button>
        </>
  
      
    </div>
  );
}

export default TodoForm;
