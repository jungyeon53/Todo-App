import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef, useState, useCallback, useReducer } from 'react';

// 테스트 내용 추가 
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' :
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo)
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  // 추가
  // const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text, 
        checked: false
      }
      dispatch({type: 'INSERT', todo})
      // setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },[todos]
  )
  
  // 삭제 
  const onRemove = useCallback(
    id => {
    //   setTodos(todos => todos.filter(todo => todo.id !== id));
    // }, [todos]
    dispatch({type : 'REMOVE', id})
  },[])

  // 체크박스
  const onToggle = useCallback(
    id => {
    //   setTodos(todos => 
    //     todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo)
    //   )
    // },
    // [todos]
    dispatch({type: 'TOGGLE', id})},[])
  

  return (
    <div className="container">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
