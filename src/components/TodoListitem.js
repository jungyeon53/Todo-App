import { MdCheckBoxOutlineBlank,MdCheckBox } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import cn from 'classnames';
import './TodoListitem.scss';

const TodoListitem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    console.log(text)
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox' , {'checked':checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <IoIosRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListitem;