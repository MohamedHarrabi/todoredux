//import React, { useState } from 'react';
//import Modal from "react-modal";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { MdDone } from 'react-icons/md';
import {useSelector,useDispatch} from 'react-redux';
import { Delete,Complete } from '../Redux/actionTypes';



const Todo = () => {
 

  

 
  
 const list = useSelector(state => state.tasks)
 const dispatch = useDispatch()
const del=(a)=>dispatch(Delete(a.id))


const done = (a) => {
  dispatch(Complete(a.id));
};



  return list.map((todo, index) => 
 <div
  className= 'todo-row complete' 
  key={index}
>
  <div id="txt" className={todo.isComplete&&   "cmp"  } >
    {todo.text}
  </div>
  <div className='icons'>
    <RiCloseCircleLine
      onClick={()=>del(todo)}
      className='delete-icon'
    />
    <TiEdit
 //    onClick={()=>editt(todo)}
      className='edit-icon'
    />
    <MdDone onClick={()=>done(todo)}/>
   
  </div>
</div>
)
  

};

export default Todo;



