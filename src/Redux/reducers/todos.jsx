import { ADD_TODO, DELETE, COMPLETE, EDIT } from "../action";

const initialState = {
  input: "",
  tasks: [{id:1,isComplete:false,isEdit:false,text:'Ahmed'}]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
  
      case ADD_TODO:
        return {
        ...state,tasks:[...state.tasks,action.payload]
    }

    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el, i) => el.id !== action.payload)
      };

    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
        )
      };

    
    // case EDIT:
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((el) =>
    //       el.id === action.payload
    //         ? { ...el,isEdit: !el.isEdit  , text:action.payload.editedText }
    //         : el
    //     ),
    //     input: ""
    //   };

    default:
      return state;
  }
};

export default todos;