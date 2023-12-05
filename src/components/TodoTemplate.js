import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleString('ko-KR', {
        weekday:'long'
    })

    return(
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            
            <div className="app-date">
                <div>{dateString}<br></br>{dayName}</div>
            </div>
           
            <div className="content">{children}</div>
        </div>
    )
}
export default TodoTemplate;