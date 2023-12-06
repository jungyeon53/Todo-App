import { IoMdAdd } from "react-icons/io";
import { useCallback, useState } from "react";
import './Todoinsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(
        e => {
            onInsert(value)
            setValue('')
            
            e.preventDefault();
        },[onInsert, value]
    )

    return (
        <div className="insert-form">
            <form className="TodoInsert" onSubmit={onSubmit}>
                <input type="text" placeholder="할일을 입력하세요" value={value} onChange={onChange}/>
                <button type="submit" > <IoMdAdd /></button>
            </form>
        </div>
    )
}

export default TodoInsert;