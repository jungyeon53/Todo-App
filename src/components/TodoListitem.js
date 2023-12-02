import React from "react";
import { MdCheckBoxOutlineBlank,MdCheckBox } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import cn from 'classnames';
import './TodoListitem.scss';

const TodoListitem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;
    console.log(text)
    return(
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoList_Item_bg">
                <div className="TodoListItem">
                    <div className={cn('checkbox' , {'checked':checked})} onClick={() => onToggle(id)}>
                        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                        <div className="text">{text}</div>
                    </div>
                    <div className="remove" onClick={() => onRemove(id)}>
                        <IoIosRemoveCircleOutline />
                    </div>
                </div>
            </div>
        </div>
    )
}

// React.memo를 이용해서 todo, onRemove, onToggle이 바뀔 때만 렌더링 되도록 설정 
export default React.memo(TodoListitem);