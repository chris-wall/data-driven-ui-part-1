
const Types = {
  CREATE_NOTE: 'create-note',
  CREATE_TODO: 'create-todo',
  DELETE_NOTE: 'delete-note',
  DELETE_TODO: 'delete-todo',
  MODIFY_NOTE: 'modify-note',
  MODIFY_TODO: 'modify-todo'
};

export function reducer(state = {}, action) {
  
  const notes = Array.from(state.notes);
  const todos = Array.from(state.todos);
  console.log(action);
  switch (action.type) {
    case Types.CREATE_NOTE:
      notes.push(action.note);
      break;
    case Types.CREATE_TODO:
      todos.push(action.todo);
      break;
    case Types.DELETE_NOTE:
      notes.splice(action.index, 1);
      break;
    case Types.DELETE_TODO:
      todos.splice(action.index, 1);
      break;
    case Types.MODIFY_NOTE:
      notes.splice(action.index, 1, action.note);
      break;
    case Types.MODIFY_TODO:
      todos.splice(action.index, 1, action.todo);
      break;
    default:
      return state;
  }
  console.log(notes);
  console.log(todos);
  return Object.assign({}, state, { notes, todos });
};

export function createNote(note) {
  return { type: Types.CREATE_NOTE, note };
};

export function createToDo(todo) {
  return { type: Types.CREATE_TODO, todo };
};

export function deleteNote(index) {
  return { type: Types.DELETE_NOTE, index };
};

export function deleteToDo(index) {
  return { type: Types.DELETE_TODO, index };
};

export function modifyNote(index, note) {
  return { type: Types.MODIFY_NOTE, index, note };
};

export function modifyToDo(index, todo) {
  return { type: Types.MODIFY_TODO, index, todo };
};