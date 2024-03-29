import TodoListitem from "./TodoListitem";
import './TodoList.scss';
import '../App.css';
import React, { useCallback } from "react";
import { List } from "react-virtualized";

const TodoList = ({todos, onRemove, onToggle}) => {

    const rowRenderer = useCallback(
        ({ index, key}) => {
          const todo = todos[index];
          return (
            <div key={key}>
              <TodoListitem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
              />
            </div>
          );
        },
        [onRemove, onToggle, todos]
      );
    return(
        <div className="TodoListWrap">
          <List
              className="TodoList"
              width={800}
              height={513}
              rowCount={todos.length} // 항목 갯수
              rowHeight={57} // 항목 높이
              rowRenderer={rowRenderer} // 항목을 렌더링 할 때 쓰는 함수
              list={todos} //배열
              style={{outline:'none'}} // list에 기본 적용되는 아웃라인 제거
              />
        </div>
    )
}

// export default React.memo(TodoList);
export default TodoList;